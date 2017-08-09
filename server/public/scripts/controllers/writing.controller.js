myApp.controller('writeController', function(DataService){
  console.log('writeController loaded');
  var vm = this;
  vm.data = DataService.data;
});
