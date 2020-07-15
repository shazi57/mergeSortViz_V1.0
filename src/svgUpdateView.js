var svgUpdateView = {

  render : function() {
    let copiedArray = SVG.data.slice()
    algorithms.initiate(copiedArray);
    for (let pair of algorithms.QuickSortData) {
      setTimeout(function(){
        svgUpdateView.switchPosition(SVG.data, pair[0], pair[1]);
      }, 1000);
    }
  },

  switchPosition : function(array, target1, target2) {
    SVG.figure.selectAll('rect')
      .data(SVG.data)
      .filter(function(d, i) { return i === target1; })
      .transition()
      .duration(300)
      .attr('x', (d, i) => 100 + (i + target2) * SVG.svgConfig.barInterval)
      .style('fill', 'blue');

    SVG.figure.selectAll('rect')
      .data(SVG.data)
      .filter(function(d, i) { return i === target2; })
      .transition()
      .duration(300)
      .attr('x', (d, i) => 100 + (i + target1) * SVG.svgConfig.barInterval)
      .style('fill', 'red');
  }
}