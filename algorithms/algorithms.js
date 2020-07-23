var algorithms = {
  QuickSort : QuickSort,
  QuickSortData : [],

  initiate: function() {
    if (algorithms.QuickSortData.length !== 0) {
      algorithms.QuickSortData = [];
    }
    var copiedArr = SVG.data.slice();
    algorithms.QuickSort(copiedArr);
    algorithms.render(algorithms.QuickSortData);
    console.log(copiedArr);
  },

  render : function(qsData) {
  var coord = qsData.shift();  
    var moveBar = function(coord, from = 0, dest = 1) {
      //console.log(coord);
       SVG.figure
        .select(`#num${coord[from]}`)
        .transition()
        .duration(1000)
        .attr('x', (d, i) => 100 + (i + coord[dest]) * SVG.svgConfig.barInterval)
        .attr('id', `num${coord[dest]}-changed`)
        .style('fill', 'red')
        .on('end', function() {
          if (algorithms.QuickSortData.length === 0) {
            console.log('bye');
            return;
          } else if (from === 1 && dest === 0) {
            SVG.figure.select(`#num${coord[from]}-changed`).attr('id', `num${coord[from]}`);
            SVG.figure.select(`#num${coord[dest]}-changed`).attr('id', `num${coord[dest]}`);

            algorithms.render(algorithms.QuickSortData.shift());
          } else  {
            moveBar(coord, 1, 0);
          }
        })
    }

    moveBar(coord)
  }
}