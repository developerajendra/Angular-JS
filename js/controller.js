app.controller("myCtrl", function($scope,$location) {
   var _this = $scope;

   //Login Form 
   $scope.login = function(data){
   	if(data.username == data.password){
   		$location.path("/dashboard")
   	}
   }

   //
});
