myApp.controller('editController', function(UserService, DataService, $location, $http){
  console.log('editController loaded');
  var ec = this;
  ec.data = DataService.data;

  ec.instructions = function(){
    swal({
    title: "Editing",
    text: "Your story should have a lot of content before you come here. Once your ready, it's time to improve your sentence details. Find a simple sentence, or short sentence, that can be improved.",
    imageUrl: "../vendors/images/pexels-photo_chalk.jpg"
    });
  };

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
