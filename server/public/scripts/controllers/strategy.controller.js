myApp.controller('strategyController', function(UserService, DataService, $http){
  console.log('strategyController loaded');
  var sc = this;
  sc.data = DataService.data;
});
