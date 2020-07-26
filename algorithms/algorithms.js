var algorithms = {
  QuickSort : QuickSort,
  QuickSortData : [],
  BubbleSort : bubbleSort,
  BubbleSortData : [],
  SelectionSort : selectionSort,
  SelectionSortData : [],

  initiateQuickSort: function() {
    if (algorithms.QuickSortData.length !== 0) {
      algorithms.QuickSortData = [];
    }
    var copiedArr = SVG.data.slice();
    algorithms.QuickSort(copiedArr);
    var copiedData = algorithms.QuickSortData.slice();
    algorithms.renderQuickSort(copiedData);
  },

  initiateBubbleSort : function() {
    if (algorithms.BubbleSortData.length !== 0) {
      algorithms.BubbleSortData = [];
    }
    var copiedArr = SVG.data.slice();
    algorithms.BubbleSort(copiedArr);
    var copiedData = algorithms.BubbleSortData.slice();
    algorithms.renderBubbleSort(copiedData);
  },

  initiateSelectionSort : function() {
    if (algorithms.SelectionSortData.length !== 0) {
      algorithms.SelectionSortData = [];
    }
    var copiedArr = SVG.data.slice();
    algorithms.SelectionSort(copiedArr);
    var copiedData = algorithms.SelectionSortData.slice();
    algorithms.renderSelectionSort(copiedData);
  },

  renderSelectionSort : function(data) {

    var moveBar = function(coord, from = 0, dest = 1) {
      //console.log(coord);
       
       SVG.figure
        .select(`#num_${coord[from]}`)
        .style('fill', this.fill = (this.fill !== 'blue' ? 'blue' : 'green')) 
        .transition()
        .duration(30)
        .attr('x', (d, i) => 100 + (i + coord[dest]) * SVG.svgConfig.barInterval)
        .attr('id', `num_${coord[dest]}-changed`)
        .on('end', function() {
          if (data.length === 0) {
            moveBar(coord, 1, 0);
            console.log('bye');
            return;
          } else if (from === 1 && dest === 0) {
            console.log('remaining mappings : ', data);
            console.log(`Switched ${coord[from]} <--> ${coord[dest]}`);
            SVG.figure.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            coord = data.shift();
            moveBar(coord);
          } else if (coord[from] === coord[dest]) {
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            moveBar(coord, 1, 0);
          } else  {
            moveBar(coord, 1, 0);
          }
        })
    }

    moveBar(data.shift())
  },

  renderBubbleSort : function(data) {

    var moveBar = function(coord, from = 0, dest = 1) {
      //console.log(coord);
       
       SVG.figure
        .select(`#num_${coord[from]}`)
        .style('fill', this.fill = (this.fill !== 'blue' ? 'blue' : 'green')) 
        .transition()
        .duration(1)
        .attr('x', (d, i) => 100 + (i + coord[dest]) * SVG.svgConfig.barInterval)
        .attr('id', `num_${coord[dest]}-changed`)
        .on('end', function() {
          if (data.length === 0) {
            moveBar(coord, 1, 0);
            console.log('bye');
            return;
          } else if (from === 1 && dest === 0) {
            console.log('remaining mappings : ', data);
            console.log(`Switched ${coord[from]} <--> ${coord[dest]}`);
            SVG.figure.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            coord = data.shift();
            moveBar(coord);
          } else if (coord[from] === coord[dest]) {
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            moveBar(coord, 1, 0);
          } else  {
            moveBar(coord, 1, 0);
          }
        })
    }

    moveBar(data.shift())
  },




  renderQuickSort : function(data) {

    var moveBar = function(coord, from = 0, dest = 1) {
      //console.log(coord);
       SVG.figure.select(`#num_${coord[2]}`).style('fill', 'blue');
       
       SVG.figure
        .select(`#num_${coord[from]}`)
        .transition()
        .duration(1)
        .attr('x', (d, i) => 100 + (i + coord[dest]) * SVG.svgConfig.barInterval)
        .attr('id', `num_${coord[dest]}-changed`)
        .style('fill', 'red')
        .on('end', function() {
          if (data.length === 0) {
            moveBar(coord, 1, 0);
            console.log('bye');
            return;
          } else if (from === 1 && dest === 0) {
            console.log('remaining mappings : ', data);
            console.log(`Switched ${coord[from]} <--> ${coord[dest]}`);
            SVG.figure.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            coord = data.shift();
            moveBar(coord);
          } else if (coord[from] === coord[dest]) {
            SVG.figure.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
            moveBar(coord, 1, 0);
          } else  {
            moveBar(coord, 1, 0);
          }
        })
    }

    moveBar(data.shift())
  }
}