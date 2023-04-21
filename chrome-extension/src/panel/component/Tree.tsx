import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';
import { circleObj, listObj, manifestObj, nodeObj } from '../../types';
import '../styles/Tree.css';
import parseData from '../treeRender/parseDataFunc';

function Tree() {
  const [manifest, setManifest] = useState<{ routes: manifestObj } | null | Record<string, never>>({});
  const [cssHeight, setCssHeight] = useState(1000);
  const [cssWidth, setCssWidth] = useState(1000);

  useEffect(() => {
    async function fetchData() {
      // getting data from chrome localstorage
      await chrome.storage.local.get(['remixManifest']).then(res => {
        setManifest(res.remixManifest);
      });
    }
    fetchData();
  }, []);

  const ref = useRef();
  useEffect(() => {
    const treeData = parseData(manifest.routes);

    if (treeData.children.length !== 0) {
    // Setting up the D3 Graph:
      const margin = { top: 10, right: 120, bottom: 10, left: 40 },
        width = Math.max(((treeData.widthSet * 600) - margin.right - margin.left), 960),
        height = Math.max(((treeData.max * 70) - margin.top - margin.bottom), 400);

      const treemap = d3.tree().size([height, width]);
      const nodesEarly = d3.hierarchy(treeData, (d: manifestObj) => d.children);
      const nodes: nodeObj = treemap(nodesEarly);

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
          d.x + ")")
        .on("click", () => {
          //open Modal
          
          console.log('clicked')
        });

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

      node.append('circle')
        .attr('r', 2.5)
        .style('stroke', (d: circleObj) => d.data.level)
        .style('fill', (d: circleObj) => d.data.level)
        .attr('fill', (d: circleObj) => (d._children ? '#555' : '#999'))
        .attr('stroke-width', 10)

      node.append('text')
        .attr('dy', '0.31em')
        .attr('x', (d: circleObj) => (d._children ? -9 : 9))
        .attr('text-anchor', (d: circleObj) => (d._children ? 'end' : 'start'))
        .text((d: circleObj) => d.data.name)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3);

      node.append('rect')
        // .attr('x', 100)
        // .attr('y', 50)
        .attr('height', 100)
        .attr('width', 200)
        .attr('class', 'test')
        .style('bg-color' , 'white')
        .style('stroke', (d: circleObj) => d.data.level)
        .style('fill', 'white')
        // .attr('style', "height:20px; width:20px; background-color:white")

      const nodesAndText = d3.selectAll('.node, .text');
      nodesAndText.raise();

      const modals = d3.selectAll('.test')
      console.log(modals);
      modals.raise();

      setCssHeight(height + 15);
      setCssWidth(width + 150);

    }
  }, [manifest]);

  return (
    <div>
        <svg
          ref={ref} className="display" style={{ height: cssHeight, width: cssWidth }}
        />
    </div>
  );
}

export default Tree;
