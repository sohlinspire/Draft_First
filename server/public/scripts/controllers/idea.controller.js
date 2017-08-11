myApp.controller('ideaController', function(DataService) {
  console.log('ideaController loaded');
  var vm = this;
  vm.data = DataService.data;
});
