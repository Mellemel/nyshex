app.controller('LoginCtrl', ['$scope', 'LoginFactory', '$state', ($scope, LoginFactory, $state) => {
	$scope.username = '';
	$scope.password = '';
	$scope.errorMsg = '';
	$scope.userInputError = false;
	$scope.passInputError = false;
	$scope.wrongCredentials = false;
	$scope.checkLogin = function () {
		var username = $scope.username;
		var password = $scope.password;
		if (username === '') {
			$scope.userInputError = true;
		} else {
			$scope.userInputError = false;
		}
		if (password === '') {
			$scope.passInputError = true;
		} else {
			$scope.passInputError = false;
		}
		if (username !== '' && password !== '') {
			var isSuccessful = LoginFactory.login({
				userName: $scope.username,
				password: $scope.password
			});
			isSuccessful.then(function (val) {
				$state.go('dashboard');
			}).catch(function (val) {
				$scope.errorMsg = val.message;
			});
		}
	};
}]);
