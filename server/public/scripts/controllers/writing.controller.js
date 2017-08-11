myApp.controller('writeController', function(UserService, DataService, $http) {
  console.log('writeController loaded');
  var vm = this;
  vm.data = DataService.data;

  function getWritingList() {
    $http.get('/start').then(function(response) {
      //console.log(response.data.arrayOfWriting);
      vm.writingList = response.data.arrayOfWriting;
      console.log(vm.writingList);
    });
  } //end of getWritingList()
  //click to add a story to the database
  vm.addStory = function(story) {
    console.log('add story', story);
    $http.post('/writing', {
        story: story
      })
      .then(function(response) {
        console.log('added story', response);
      });
  }; //end of addStory()

  vm.updateStory = function(story, id) {
    console.log('update story', story, id);
    $http.put('/writing/', {
      story: story,
      id: id
    }).then(function(response) {
      console.log('added story', response);
      getWritingList();
    });
  }; //end of addStory()

}); //end of controller
