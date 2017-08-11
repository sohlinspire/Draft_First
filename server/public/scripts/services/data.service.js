myApp.factory('DataService', function() {
  var data =
    // object to populate fields in idea.html,
    // organizer.html, and writing.html
    {
      idea: '',
      who: '',
      what: '',
      where: '',
      when: '',
      why: '',
      how: '',
      story: ''
    };
  return {
    data: data
  };
});
