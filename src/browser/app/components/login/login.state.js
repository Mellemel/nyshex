app.config(($stateProvider) => {
    $stateProvider
    .state('login', {
        url: '/',
        controller: 'LoginCtrl',
        templateUrl: 'browser/app/components/login/login.html'
    })
    .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'browser/app/components/dashboard/dashboard.html'
    });
});
