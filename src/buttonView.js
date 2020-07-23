var ButtonView = {
  $start : $('#start'),

  $end : $('#end'),

  $update : $('#update'),

  $quickSort : $('#quickSort'),

  initiate : function(){
    ButtonView.$start.on('click', ButtonView.startEventHandler);
    ButtonView.$end.on('click', ButtonView.endEventHandler);
    ButtonView.$update.on('click', ButtonView.updateAllEventHandler);
    ButtonView.$quickSort.on('click', ButtonView.updateEventHandler);

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

  updateEventHandler : function(event) {
    algorithms.initiate();
  }
};