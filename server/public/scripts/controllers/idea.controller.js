myApp.controller('ideaController', function(UserService, DataService, $http, $location) {
  console.log('ideaController loaded');
  var vm = this;
  vm.data = DataService.data;

  vm.instructions = function(){
    swal({
    title: "Start With An Idea",
    text: "Coming up wth an idea can be the most difficult part of the writing process. If you have an idea already, enter it in the text box to get started. Otherwise, click the button for a random suggestion to get started.",
    imageUrl: "../vendors/images/pexels-photo_chalk.jpg"
    });
  };
  //get random idea from database
  vm.getRandomIdea = function() {
    console.log('get random');
    $http.get('/idea').then(function(response) {
      console.log('get random : ', response);
      vm.data.idea = response.data.randomIdea[0].topic;
    });
  }; //end of getWritingList()
  // vm.getRandomIdea();
});
