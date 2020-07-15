var ButtonView = {
  $start : $('#start'),

  $end : $('#end'),

  $update : $('#update'),

  initiate : function(){
    ButtonView.$start.on('click', ButtonView.startEventHandler);
    ButtonView.$end.on('click', ButtonView.endEventHandler);
    ButtonView.$update.on('click', ButtonView.updateEventHandler);
  },

  startEventHandler : function(event) {
    svgView.render();
  },

  endEventHandler : function(event) {
    svgView.clear();
  },

  updateEventHandler : function(event) {
    svgUpdateView.render();
  }
};