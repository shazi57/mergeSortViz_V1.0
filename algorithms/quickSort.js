var quicksort = function(array) {
  var Qsort = function(array, low, high) {
    if (low < high) {
      var q = partition(array,low, high);
      Qsort(array, low, q);
      Qsort(array, q + 1, high);
    }
  }
  Qsort(array, 0, array.length-1);
};

var partition = function(array, low, high) {
  var pivot = array[Math.floor((low + high) /2)],
      i = low,
      j = high;

  while (true) {
    do {
      i++;
    }
    while (array[i] < pivot);

    do {
      j--;
    }
    while (array[j] > pivot);

    if (i >= j) {
      return j;
    }
    swapRef(array,i,j);
    algorithms.QuickSortData.push([i,j]);
  }
}

var swapRef = function(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}