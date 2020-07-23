var svgUpdateView = {

  render : function() {
    let copiedArray = SVG.data.slice();
    //algorithms.initiate(copiedArray);
    svgUpdateView.changeAll(copiedArray.sort((a,b) => (a-b)));
  },

  changeAll : function(array) {
    SVG.figure
      .selectAll('rect')
      .data(array)
      .transition()
      .attr('x', (d, i) => 100 + i * SVG.svgConfig.barInterval)
      .attr('y', (d, i) => 800 - 10 * d)
      .attr('width', SVG.svgConfig.barWidth)
      .attr('height', d => (d * 10))
      .style('fill', 'red');
  }  
}