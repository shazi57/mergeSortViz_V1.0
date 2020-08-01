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

  swapRef : function(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
}