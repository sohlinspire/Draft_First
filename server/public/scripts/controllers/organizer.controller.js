myApp.controller('orgController', function(DataService){
  console.log('orgController loaded');
  var vm = this;
  vm.data = DataService.data;
});
