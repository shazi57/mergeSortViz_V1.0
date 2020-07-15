var svgView = {
  svg : null,

  initiate : function() {
    svgView.svg = d3.select('body')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 800);
  },
  render : function() {
    var arrayRandom = helperFunctions.createRandomArray(10);

    svgView.svg.selectAll('rect')
      .data(arrayRandom)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 100 + i * 55)
      .attr('y', (d, i) => 800 - 10 * d)
      .attr('width', 50)
      .attr('height', d => (d * 10))
      .style('fill', 'green');

    svgView.svg.node();
  },

  clear : function() {
    svgView.svg
      .selectAll('rect')
      .data([])
      .exit()
      .remove();
  }
}