app.controller('DashboardCtrl', ['$scope', 'OfferFactory', ($scope, OfferFactory) => {
    $scope.users = [];
    $scope.results = '110 Results';
    OfferFactory.getOffers(1).then(function (val) {
        $scope.users = val;
    });
}]);
