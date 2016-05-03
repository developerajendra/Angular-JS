 app.config(["$routeProvider", function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:"custome_components/login.html",
		controller:""
	}).when("/dashboard",{
		templateUrl:"custome_components/dashboard.html",
		controller:""
	}).when("/dashboard/itemlist",{
		templateUrl:"custome_components/productList.html",
		controller:""
	})
	.otherwise({
		redirectTo:"/"
	})
}]);