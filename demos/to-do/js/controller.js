//View changes controller
app.controller("viewController", ["$location", function($location) {
    var vm = this;
    //Active current tab
    vm.isActive = function(activeElement) {
        var active = (activeElement == $location.path());
        return active;
    }
}]);



//To-do Controller
app.controller("toDoController", ["$scope", "$location", "getTodo", "$timeout", "ngDialog", "postDate", function($scope, $location, getTodo, $timeout, ngDialog, postDate) {

    //Variables
    var vm = this;
    vm.myToDo = null;
    vm.toastMessage = "some message";
    vm.showToast = false;

    //Render default JSON
    getTodo.then(function(data) {
        vm.toDos = data.data;
    });

    //Add To Do list
    vm.submitForm = function() {
        if (vm.myToDo != null && vm.myToDo != '') {

            vm.toDos.unshift({
                id: vm.toDos.length,
                text: vm.myToDo,
                completed: false,
                createdOn: postDate.now()
            });

            //show Toast
            vm.toggleToast("Submit todo...");
        }
        vm.myToDo = "";
        vm.toast = true;
    }

    //Edit To-Do.
    vm.edit = function(that, dodo) {
        that.clicked = !that.clicked;

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

    //Toogle toast
    vm.toggleToast = function(toastMessage) {

        //Toast message
        vm.toastMessage = toastMessage;
        //show Toast
        vm.showToast = true;

        $timeout(function() {
            vm.showToast = false;
        }, 2000);
    }


    //Complete todo
    vm.change = function(that, status) {
        //Dialog message
        $scope.message = "Is your todo completed?";

        //Dialog open
        ngDialog.open({
            scope: $scope,
            template: "views/dialog-confirmation.html",
            className: 'ngdialog-theme-default'
        });


        //Close dialog
        $scope.closeDialog = function(value) {
            if (value) {
                that.completed = status;

                //show Toast
                vm.toggleToast("Todo completed...");

            } else {
                //show Toast
                vm.toggleToast("Cancled...");
            }
            ngDialog.close();
        }
    }


}]);


//To-do Complete controller
app.controller("completeController", ["$scope", "getTodo", "$timeout", "ngDialog", function($scope, getTodo, $timeout, ngDialog) {
    var vm = this;

    //Render default JSON of completed todo
    getTodo.then(function(data) {
        vm.toDos = data.data;
    });

    //Remove To-DO
    vm.remove = function(todo) {

        //Dialog message
        $scope.message = "Do you want to remove todo?";

        //Dialog open
        ngDialog.open({
            scope: $scope,
            template: "views/dialog-confirmation.html",
            className: 'ngdialog-theme-default'
        });


        //Close dialog
        $scope.closeDialog = function(value) {
            if (value) {
                vm.toDos.splice(vm.toDos.indexOf(todo), 1);

                //show Toast
                vm.toggleToast("Removed todo...");

            } else {
                //show Toast
                vm.toggleToast("Cancled...");
            }

            ngDialog.close();
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

}]);
