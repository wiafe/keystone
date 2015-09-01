$(function() {
    $('.screen').unslider({
		speed: 500,
		delay: 3000,
		complete: function() {},
		keys: true,
		dots: true,
		fluid: false
		});
});

$(function() {
    $('.screen').unslider({
		speed: 5000,
		delay: 5000,
		complete: function() {},
		keys: true,
		dots: false,
		fluid: false
		});
});

var conApp = angular.module('myApp', []);


conApp.controller('NumberController', function ($scope) {

	$scope.test = 68;
	$scope.donation = 04;
	$scope.percent = 10;
	$scope.people = 100;

	$scope.percentError = function() {
		if( 0 > $scope.percent > 30 ){
			$scope.percent = null;
		}
		else {
			$scope.error = false;
		}
		console.log($scope.percent);
	}
});
