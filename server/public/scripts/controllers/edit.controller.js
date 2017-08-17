myApp.controller('editController', function(UserService, DataService, $location){
  console.log('editController loaded');
  var sc = this;
  sc.data = DataService.data;


});
