describe("merge-sort algorithm", function() {
  it("Quick-sorting should work properly", function() {
    for (let i = 0; i < 100; i ++) {
      let array = helperFunctions.createRandomArray(80);
      quicksort(array);
      let dafaultSortedArray = array.sort((a,b) => (a-b));
      expect(array).to.eql(dafaultSortedArray);
    }
  });

});