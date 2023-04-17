// import logo from './logo.svg';
import * as d3 from 'd3';
import React, { useState } from 'react';
import '../styles/Tree.css';
// import remixManifest from './test-data';
// import { render } from 'react-dom';
import { useEffect, useRef } from 'react';
import parseData from '../treeRender/parseDataFunc';
import { manifestObj, nodeObj, circleObj, listObj } from '../../types';

function Tree() {
  const [manifest, setManifest] = useState<{routes: manifestObj} | null | Record<string, never>>({});
  const [cssHeight, setCssHeight] = useState(1000);
  const [cssWidth, setCssWidth] = useState(1000)

  useEffect(() => {
    async function fetchData() {
      // getting data from chrome localstorage
      await chrome.storage.local.get(["remixManifest"]).then(res => {
        setManifest(res.remixManifest);
      })
    }
    fetchData();
  }, [])
  // function Tree() {

  const ref = useRef()
  useEffect(() => {
    const treeData = parseData(manifest.routes)

    // const svgElement = d3.select(ref.current)
    // svgElement.append("circle")
    //   .attr("cx", 150)
    //   .attr("cy", 70)
    //   .attr("r",  50)

    if (treeData.children.length !== 0){
      const margin = { top: 10, right: 120, bottom: 10, left: 40 },
      width = Math.max(((treeData.widthSet * 600) - margin.right - margin.left), 960),
      height = Math.max(((treeData.max * 70) - margin.top - margin.bottom), 400);

      const treemap = d3.tree().size([height, width]);
      let nodesEarly = d3.hierarchy(treeData, (d: manifestObj) => d.children);
      let nodes: nodeObj = treemap(nodesEarly);

      const svg = d3.select(ref.current).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
      g = svg.append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

      const node = g.selectAll(".node")
      .data(nodes.descendants())
      .enter().append("g")
      .attr("class", (d: manifestObj) => "node" + (d.children ? " node--internal"
        : " node--leaf"))
      .attr("transform", (d: manifestObj) => "translate(" + d.y + "," +
        d.x + ")");

      const link = g.selectAll(".link")
      .data(nodes.descendants().slice(1))
      .enter().append("path")
      .attr("class", "link")
      .style("stroke", 'white')
      .style("stroke-width", 1)
      .style("fill", 'none')
      .attr("d", (d: listObj) => {
        return "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x;
      });

      node.append("circle")
        // .attr("r", d => 6)
        .attr('r', 2.5)
        .style("stroke", (d: circleObj) => d.data.level)
        .style("fill", (d: circleObj) => d.data.level)
        .attr('fill', (d: circleObj) => (d._children ? '#555' : '#999'))
        .attr('stroke-width', 10)


      node.append("text")
        .attr("dy", "0.31em")
        .attr("x", (d: circleObj) => (d._children ? -9 : 9))
        .attr("text-anchor", (d: circleObj) => (d._children ? "end" : "start"))
        .text((d: circleObj) => d.data.name)
        .clone(true)
        .lower()
        // .attr("fill", "white")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
      // .attr("stroke", "black")
      // .attr("stroke", "rgb(26, 23, 24)")

      // @ts-ignore
      const nodesAndText = d3.selectAll('.node', '.text');
      nodesAndText.raise()

      // const cssHeight = height * 10 
      setCssHeight(height + 15)
      setCssWidth(width + 150)

    }
  }, [manifest])

  return (
    <div>
      <body>
        <svg
          ref={ref} className="display" style={{height: cssHeight, width: cssWidth}}
        />
      </body>
    </div>
  );
}

export default Tree;
