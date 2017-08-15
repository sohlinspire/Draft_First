myApp.controller('orgController', function(UserService, DataService, $http, $location){
  console.log('orgController loaded');
  var oc = this;
  oc.data = DataService.data;

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
