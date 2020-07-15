var helperFunctions = {
  createRandomArray : function(length) {
    var data = [];
    var randomSize = d3.randomInt(1, 70);
    for (let i = 0; i < length; i++) {
      data.push(randomSize());
    }

    console.log(`this array has length ${length}`);
    return data;
  }
}