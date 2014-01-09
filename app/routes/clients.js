App.ClientsRoute = Ember.Route.extend({

  model: function(){
    return this.store.find('user');
  },

  actions: {
    startTimer: function(model){
      model.set('isTracking', true);
      model.save();
    },
    stopTimer: function(model){
      model.set('isTracking', false);
      model.save();
    }
  }

});
