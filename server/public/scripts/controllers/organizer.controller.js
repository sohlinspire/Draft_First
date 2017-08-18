myApp.controller('orgController', function(UserService, DataService, $http, $location){
  console.log('orgController loaded');
  var oc = this;
  oc.data = DataService.data;

  oc.instructions = function(){
    swal({
    title: "Graphic Organizer",
    text: "Graphic organizers allow you to develop the content of your story. Answer each of the questions in the space provided. Avoid complete sentences.",
    imageUrl: "../vendors/images/pexels-photo_chalk.jpg"
    });
  };
  //click to add idea details to the database
  oc.addIdea = function(data) {
    console.log('add idea', data);
    $http.post('/organizer', {
        data: data
      })
      .then(function(response) {
        console.log('added idea', response);
      });
      $location.path('/writing');
  }; //end of addStory()

});
