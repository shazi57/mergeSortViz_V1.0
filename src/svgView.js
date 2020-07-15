var svgView = {
  initiate : function() {
    SVG.figure = d3.select('body')
      .append('svg')
      .attr('width', SVG.svgConfig.canvasWidth)
      .attr('height', SVG.svgConfig.canvasHeight);
  },

  render : function() {
    SVG.data = helperFunctions.createRandomArray(SVG.svgConfig.numElements);
    SVG.figure.selectAll('rect')
      .data(SVG.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 100 + i * SVG.svgConfig.barInterval)
      .attr('y', (d, i) => 800 - 10 * d)
      .attr('width', SVG.svgConfig.barWidth)
      .attr('height', d => (d * 10))
      .style('fill', 'green');
  },

  clear : function() {
    SVG.figure
      .selectAll('rect')
      .data([])
      .exit()
      .remove();
  }
}