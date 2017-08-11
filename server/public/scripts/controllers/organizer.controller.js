myApp.controller('orgController', function(UserService, DataService, $http){
  console.log('orgController loaded');
  var oc = this;
  oc.data = DataService.data;
});
