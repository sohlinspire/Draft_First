myApp.controller('startController', function($http){
  console.log('startController loaded');
  var sc = this;

  getWritingList();
  //this controller loads when For Rent is clicked on the nav.html
  function getWritingList() {
    $http.get('/start').then(function(response) {
      console.log(response.data.arrayOfWriting);
      sc.writingList = response.data.arrayOfWriting;
      console.log(sc.writingList);
    });
  }

});
