var quicksort = function(array) {
  var Qsort = function(array, low, high) {
    let index;
    if (array.length > 1) {
      index = partition(array, low, high);
      if (low < index - 1) {
        Qsort(array, low, index - 1);
      }
      if (index < high) {
        Qsort(array, index, high);
      }
    }
    return array;
  }
  Qsort(array, 0, array.length-1);
};

var partition = function(array, low, high) {
  var pivot = array[Math.floor((low + high) /2)],
      i = low,
      j = high;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swapRef(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

var swapRef = function(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}