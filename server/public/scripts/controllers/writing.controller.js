myApp.controller('writeController', function(DataService, $http){
  console.log('writeController loaded');
  var vm = this;
  vm.data = DataService.data;

  //click to add a story to the database
  vm.addStory = function(story) {
      console.log('add story', story);
      $http.post('/writing', {story : story})
        .then(function(response) {
          console.log('added story', response);
        });
    };//end of addStory()

    vm.updateStory = function(story) {
      console.log('update story', story);
      //   $http.put().then(function(response) {
      //   console.log('added story', response);
      //   getWritingList();
      //   });
      };//end of addStory()

});//end of controller
