//http Services
app.service("getTodo", ["$http", function($http) {
    var todoData = {};
    //Render default JSON
    return $http.get("data/todo.json");
}]);


//Date Services
app.service("postDate", ["$timeout", function($timeout) {

    this.now = function() {
        var now = new Date(),
            date = now.getDate(),
            month = now.getMonth(),
            year = now.getFullYear(),
            hour = now.getHours(),
            minutes = now.getMinutes(),
            seconds = now.getSeconds();
        return date + "-" + month + "-" + year + " | " + hour + ":" + minutes + ":" + seconds;
    }
}]);
