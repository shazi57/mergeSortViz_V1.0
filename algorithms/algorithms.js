var algorithms = {
  QuickSort : QuickSort,
  QuickSortData : [],

  initiate: function() {
    if (algorithms.QuickSortData.length !== 0) {
      algorithms.QuickSortData = [];
    }
    var copiedArr = SVG.data.slice();
    algorithms.QuickSort(copiedArr);
    console.log(algorithms.QuickSortData);
    var copiedData = algorithms.QuickSortData.slice();
    algorithms.render(copiedData);
    //console.log(copiedArr);
  },

  render : function(data) {

    var moveBar = function(coord, from = 0, dest = 1) {
      //console.log(coord);
       SVG.figure.select(`#num_${coord[2]}`).style('fill', 'blue');
       
       SVG.figure
        .select(`#num_${coord[from]}`)
        .transition()
        .duration(1000)
        .attr('x', (d, i) => 100 + (i + coord[dest]) * SVG.svgConfig.barInterval)
        .attr('id', `num_${coord[dest]}-changed`)
        .style('fill', 'red')
        .on('end', function() {
          if (data.length === 0) {
            moveBar(coord);
            console.log('bye');
            return;
          } else if (from === 1 && dest === 0) {
            console.log(data);
            console.log(coord);
            SVG.figure.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            coord = data.shift();
            moveBar(coord);
          } else if (coord[from] === coord[dest]) {
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            moveBar(coord, 1, 0);
          } else  {
            console.log('hello~')
            moveBar(coord, 1, 0);
          }
        })
    }

    moveBar(data.shift())
  }
}