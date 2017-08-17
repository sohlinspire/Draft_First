myApp.controller('editController', function(UserService, DataService, $location, $http){
  console.log('editController loaded');
  var ec = this;
  ec.data = DataService.data;

  function getWritingList() {
    $http.get('/start').then(function(response) {
      //console.log(response.data.arrayOfWriting);
      ec.writingList = response.data.arrayOfWriting;
      console.log(ec.writingList);
    });
  } //end of getWritingList()

  ec.updateStory = function(story, id) {
    console.log('update story', story, id);
    $http.put('/edit/', {
      story: story,
      id: id
    }).then(function(response) {
      console.log('added story', response);
      getWritingList();
    });
  }; //end of updateStory()
});//end of controller
