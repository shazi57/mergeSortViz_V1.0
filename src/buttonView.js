var ButtonView = {
  $start : $('#start'),

  $end : $('#end'),

  $update : $('#update'),

  $quickSort : $('#quickSort'),

  $bubbleSort : $('#bubbleSort'),

  $selectionSort : $('#selectionSort'),

  initiate : function(){
    ButtonView.$start.on('click', ButtonView.startEventHandler);
    ButtonView.$end.on('click', ButtonView.endEventHandler);
    ButtonView.$update.on('click', ButtonView.updateAllEventHandler);
    ButtonView.$quickSort.on('click', ButtonView.updateQuickSortEventHandler);
    ButtonView.$bubbleSort.on('click', ButtonView.updateBubbleSortEventHandler);
    ButtonView.$selectionSort.on('click', ButtonView.updateSelectionSortEventHandler);


  },

  startEventHandler : function(event) {
    svgView.render();
  },

  endEventHandler : function(event) {
    svgView.clear();
  },

  updateAllEventHandler : function(event) {
    svgUpdateView.render();
  },

  updateQuickSortEventHandler : function(event) {
    algorithms.initiateQuickSort();
  },

  updateBubbleSortEventHandler : function(event) {
    algorithms.initiateBubbleSort();
  },

  updateSelectionSortEventHandler : function(event) {
    algorithms.initiateSelectionSort();
  }
};