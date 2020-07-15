var ButtonView = {
  $start : $('#start'),

  $end : $('#end'),

  initiate : function(){
    ButtonView.$start.on('click', ButtonView.startEventHandler);
    ButtonView.$end.on('click', ButtonView.endEventHandler);
  },

  startEventHandler : function(event) {
    svgView.render();
  },

  endEventHandler : function(event) {
    svgView.clear();
  }
};