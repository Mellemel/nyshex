app.config(($stateProvider) => {
    $stateProvider
    .state('login', {
        url: '/',
        controller: 'LoginCtrl',
        templateUrl: 'browser/app/components/login/login.html'
    });
});
