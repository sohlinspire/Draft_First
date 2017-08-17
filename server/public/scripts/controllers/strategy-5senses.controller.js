myApp.controller('strategy2Controller', function(UserService, DataService, $location){
  console.log('strategy2Controller loaded');
  var sc = this;
  sc.data = DataService.data;
  sc.temptext = '';

  //takes and replaces old sentence with new sentence
  sc.transfertext = function(){
    console.log("sc.transfertext");
    sc.data.story.writing = sc.data.story.writing.replace(sc.data.strategy, sc.temptext);
    $location.path('/edit');
  };
});
