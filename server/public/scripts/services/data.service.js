myApp.factory('DataService', function(){
    var data =
        {
            idea: '',
            who: '',
            what: '',
            where: '',
            when: '',
            why: '',
            how: ''
        };

    return {
        data: data
    };
});
