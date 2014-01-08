App.Router.map(function() {

  this.resource('projects');
  this.resource('project', { path: '/projects/:id' }, function () {
    this.route('edit');
  });



});
