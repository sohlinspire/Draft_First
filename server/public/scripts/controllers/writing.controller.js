myApp.controller('writeController', function(UserService, DataService, $http) {
  console.log('writeController loaded');
  var vm = this;
  vm.data = DataService.data;

  vm.instructions = function(){
    swal({
    title: "Writing",
    text: "It's time to write! Use the pieces of sentences from the graphic organizer to start your story. These could make up the first paragraph or each piece could be brought in as you write more paragraphs.",
    imageUrl: "../vendors/images/pexels-photo_chalk.jpg"
    });
  };
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

}); //end of controller
