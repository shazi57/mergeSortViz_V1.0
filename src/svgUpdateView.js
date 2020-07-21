var svgUpdateView = {

  render : function() {
    let copiedArray = SVG.data.slice();
    console.log(copiedArray);
    algorithms.initiate(copiedArray);
    console.log(algorithms.QuickSortArray);
    svgUpdateView.changeAll(copiedArray);
  },

  switchPosition : function(array, target1, target2) {
    SVG.figure.selectAll('rect')
      .data(SVG.data)
      .transition()
      .filter(function(d, i) { return i === target1; })
      .duration(300)
      .attr('x', (d, i) => 100 + (i + target2) * SVG.svgConfig.barInterval)
      .style('fill', 'blue');

    SVG.figure.selectAll('rect')
      .data(SVG.data)
      .transition()
      .filter(function(d, i) { return i === target2; })
      .duration(300)
      .attr('x', (d, i) => 100 + (i + target1) * SVG.svgConfig.barInterval)
      .style('fill', 'red');
  }
}