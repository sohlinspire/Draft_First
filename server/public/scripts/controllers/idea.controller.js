myApp.controller('ideaController', function(UserService, DataService, $http) {
  console.log('ideaController loaded');
  var vm = this;
  vm.data = DataService.data;


  //get random idea from database
  vm.getRandomIdea = function() {
    console.log('get random');
    $http.get('/idea').then(function(response) {
      console.log('get random : ', response);
      vm.data.idea = response.data.randomIdea[0].topic;
    });
  }; //end of getWritingList()
  vm.getRandomIdea();
});
