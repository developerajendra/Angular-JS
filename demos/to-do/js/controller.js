app.controller("toDoController", ["$scope", "$timeout", "$location", "$http", function($scope, $timeout, $location, $http) {
    var vm = this;
    vm.myToDo = null;
    vm.toastMessage = "some message";
    vm.showToast = false;


    //Render default JSON
    $http.get("data/todo.json").success(function(data) {
        vm.toDos = data;
    });



    //Add To Do list
    vm.submitForm = function() {
        if (vm.myToDo != null && vm.myToDo != '') {

            vm.toDos.push({
                id: vm.toDos.length,
                text: vm.myToDo,
                completed: false
            });

            console.log(vm.toDos);
            //show Toast
            vm.toggleToast("Submit todo...");


            //Update data on localstorage
            // localStorage.setItem("elem", vm.toDos);
        }
        vm.myToDo = "";
        vm.toast = true;
    }

    //Remove To-DO
    vm.remove = function(todo) {
        vm.toDos.splice(vm.toDos.indexOf(todo), 1);

        //show Toast
        vm.toggleToast("Remove todo...");

        //Update data on localstorage
        localStorage.setItem("elem", vm.toDos);

    }

    //Edit To-Do.
    vm.edit = function(that, dodo) {
        that.clicked = !that.clicked;

        console.log(dodo);

        //show Toast
        vm.toggleToast("Edit todo...");

        if (that.clicked) {
            //Toast message
            vm.toastMessage = "Edit todo..";
        } else {
            //Toast message
            vm.toastMessage = "Todo saved..";
        }

    }

    //Google toast
    vm.toggleToast = function(toastMessage) {

        //Toast message
        vm.toastMessage = toastMessage;
        //show Toast
        vm.showToast = true;

        $timeout(function() {
            vm.showToast = false;
        }, 2000);
    }


    //Load todo's from loalstorage
    /*  var elem = localStorage.getItem("elem");
      if (elem) {
          vm.toDos = elem.split(",");
      }*/

    //Active current tab
    vm.isActive = function(activeElement) {
        var active = (activeElement == $location.path());
        return active;
    }

    vm.change = function(that, status) {
        that.completed = status
    }


}]);




app.directive("paperToast", ["$timeout", function() {

    return {
        restrict: "E",
        scope: {
            showtoast: '=showtoast',
            message: "=message"
        },
        template: '<div class="toast" ng-class="{showToast:showtoast}" ng-show="showtoast"><p>{{message}}</p></div>'
    }
}]);
