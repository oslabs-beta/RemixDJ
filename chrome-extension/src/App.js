// import logo from './logo.svg';
import './App.css';
import * as d3 from 'https://unpkg.com/d3?module'
// import remixManifest from './test-data';
// import { render } from 'react-dom';
import { useRef, useEffect } from 'react';
import remixManifest from './treeRender/mockData';
import parseData from './treeRender/parseDataFunc';

function App() {
  
  // function Tree() {

  const ref = useRef()
  useEffect(() => {
    const treeData = parseData(remixManifest)
    console.log(treeData)

    // const svgElement = d3.select(ref.current)
    // svgElement.append("circle")
    //   .attr("cx", 150)
    //   .attr("cy", 70)
    //   .attr("r",  50)

    const margin = { top: 10, right: 120, bottom: 10, left: 40 },
            width = d3.width || 960,
            height = 500 - margin.top - margin.bottom;

    const treemap = d3.tree().size([height, width]);
    let nodes = d3.hierarchy(treeData, d => d.children);
    nodes = treemap(nodes);

    const svg = d3.select(ref.current).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
      g = svg.append("g")
          .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    
    const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.children ? " node--internal"
        : " node--leaf"))
    .attr("transform", d => "translate(" + d.y + "," +
        d.x + ")");

    const link = g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .style("stroke", 'white')
    .style("stroke-width", 1)
    .style("fill", 'none')
    .attr("d", d => {
        return "M" + d.y + "," + d.x
            + "C" + (d.y + d.parent.y) / 2 + "," + d.x
            + " " + (d.y + d.parent.y ) / 2 + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
    });

    node.append("circle")
      // .attr("r", d => 6)
      .attr('r', 2.5)
      .style("stroke", d => d.data.level)
      .style("fill", d => d.data.level)
      .attr('fill', (d) => (d._children ? '#555' : '#999'))
      .attr('stroke-width', 10)


    node.append("text")
    .attr("dy", "0.31em")
    .attr("x", (d) => (d._children ? -9 : 9))
    .attr("text-anchor", (d) => (d._children ? "end" : "start"))
    .text((d) => d.data.name)
    .clone( true)
    .lower()
    // .attr("fill", "white")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
    // .attr("stroke", "black")
    // .attr("stroke", "rgb(26, 23, 24)")
    
    const nodesAndText = d3.selectAll('.node', '.text');
    nodesAndText.raise()
    
  }, [])


  
  return (
    <div>
      <body>
        <svg
          ref={ref} class="display"
        />
      </body>
    </div>
  );
}

export default App;
