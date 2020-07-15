var helperFunctions = {
  createRandomArray : function(length) {
    var data = [];
    var randomSize = d3.randomInt(1, 70);
    for (let i = 0; i < length; i++) {
      data.push(randomSize());
    }

    console.log(`this array has length ${length}`);
    return data;
  },

  switchPosition : function(array, target1, target2) {
    svg.selectAll('rect')
      .data(array)
      .filter(function(d, i) { return i === target1; })
      .transition()
      .attr('x', (d, i) => 100 + (i + target2) * 55)
      .style('fill', 'blue');

    svg.selectAll('rect')
      .data(array)
      .filter(function(d, i) { return i === target2; })
      .transition()
      .attr('x', (d, i) => 100 + (i + target1) * 55)
      .style('fill', 'red');
  }
}