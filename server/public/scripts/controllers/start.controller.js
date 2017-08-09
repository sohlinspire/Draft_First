myApp.controller('startController', function($http){
  console.log('startController loaded');
  var sc = this;

  getWritingList();
  //this function GETS the user's writing from the database
  function getWritingList() {
    $http.get('/start').then(function(response) {
      console.log(response.data.arrayOfWriting);
      sc.writingList = response.data.arrayOfWriting;
      console.log(sc.writingList);
    });
  }

});
