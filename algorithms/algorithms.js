var algorithms = {
  QuickSort : quicksort,
  QuickSortData : [],

  initiate: function(array) {
    if (algorithms.QuickSortData.length !== 0) {
      algorithms.QuickSortData = [];
    }
    algorithms.QuickSort(array);
    console.log(array);
  }
}