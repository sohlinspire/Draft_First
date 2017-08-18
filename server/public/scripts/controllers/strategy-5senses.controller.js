myApp.controller('strategy2Controller', function(UserService, DataService, $location){
  console.log('strategy2Controller loaded');
  var sc = this;
  sc.data = DataService.data;
  sc.temptext = '';

  sc.instructions = function(){
    swal({
    title: "Strategy: 5 senses",
    text: "Rich, description is key for an interesting story. This strategy will help you add details to simple sentences.",
    imageUrl: "../vendors/images/pexels-photo_chalk.jpg"
    });
  };
  //takes and replaces old sentence with new sentence
  sc.transfertext = function(){
    console.log("sc.transfertext");
    sc.data.story.writing = sc.data.story.writing.replace(sc.data.strategy, sc.temptext);
    $location.path('/edit');
  };
});
