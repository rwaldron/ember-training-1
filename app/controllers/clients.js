App.ClientsController = Ember.ArrayController.extend({

  query: '',

  filterModel: function(){
    var query = this.get('query').toLowerCase();
    var filteredModel = this.get('model').filter(function(item){
      if (query === '' || item.get('name').toLowerCase().indexOf(query) === 0)
        return true;
      return false;
    });
    this.set('filteredModel', filteredModel);
  }.observes('query', 'model.@each.name').on('init'),

  clientsCount: function(){
    return this.get('model.length');
  }.property('model.length')

});
