myApp.controller('startController', function(UserService, DataService, $http) {
  console.log('startController loaded');
  var sc = this;

  getWritingList();
  //this function GETS the user's writing from the database
  function getWritingList() {
    $http.get('/start').then(function(response) {
      //console.log(response.data.arrayOfWriting);
      sc.writingList = response.data.arrayOfWriting;
      console.log(sc.writingList);
    });
  } //end of getWritingList()

  //selected story by index and send to writing.html
  sc.getStoryForUpdate = function(index) {
    console.log(index);
    DataService.data.story = sc.writingList[index];
    console.log(DataService.data.story);
    //console.log(sc.selectedStoryByIndex);
  };

  //delete story from start,html
  sc.deleteStory = function(id) {
    console.log('delete');
    swal({
      title: "Are you sure?",
      text: "Your story will be gone forever!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    }).then(function() {
      $http.delete('/start/' + id)
      .then(function(req, res) {
        console.log("delete story");
        getWritingList();
        });
      swal("Deleted!", "Your story has been deleted.", "success");
    });
  }; //end of deleteList()

}); //end of controller
