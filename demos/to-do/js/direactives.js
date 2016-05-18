//Direactives
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
