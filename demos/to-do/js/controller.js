app.controller("toDoController", function($scope) {
    var todoList = this;
    todoList.toDos = ["My demo todo...."];

    //Add To Do list
    todoList.submitForm = function() {
        if (todoList.myToDo != null && todoList.myToDo != '') {
            todoList.toDos.push(todoList.myToDo);
        }
        todoList.myToDo = "";
        todoList.toast = true;
    }


    //Remove To-DO
    todoList.remove = function(todo) {
        todoList.toDos.splice(todoList.toDos.indexOf(todo), 1);
    }

    //Edit To-Do.
    todoList.edit = function(that, dodo) {
        that.clicked = !that.clicked;
    }


});
