const svg =
  d3.select('body')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 800);

document.getElementById('start').addEventListener('click', function(e) {
  initiate();
});

document.getElementById('end').addEventListener('click', function(e) {
  clear();
});

var initiate = function() {
  let arrayRandom = createRandomArray(10);
  svg.selectAll('rect')
    .data(arrayRandom)
    .enter()
    .append('rect')
    .attr('x', (d, i) => 100 + i * 55)
    .attr('y', (d, i) => 800 - 10 * d)
    .attr('width', 50)
    .attr('height', d => (d * 10))
    .style('fill', 'green');

  switchPosition(arrayRandom);
  return svg.node();
};

var switchPosition = function(array) {
  svg.selectAll('rect')
    .data(array)
    .filter(function(d, i) { return i === 3; })
    .transition()
    .attr('x', (d, i) => 100 + (i + 8) * 55)
    .style('fill', 'blue');

  svg.selectAll('rect')
    .data(array)
    .filter(function(d, i) { return i === 8; })
    .transition()
    .attr('x', (d, i) => 100 + (i + 3) * 55)
    .style('fill', 'red');
};

var mergeSort = function(array) {
  svg.selectAll('rect')
    .data(array)
    .transition()
    .attr('y', (d, i) => 800 - 10 * d)
    .attr('height', d => d * 10);
};

var clear = function() {
  svg.selectAll('rect')
    .data([])
    .exit()
    .remove();
};


var createRandomArray = function(length) {
  var data = [];
  var randomSize = d3.randomInt(1, 70);
  for (i = 0; i < length; i++) {
    data.push(randomSize());
  }

  console.log(`this array has length ${length}`);
  return data;
};