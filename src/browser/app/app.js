window.app = angular.module('nyshexApp', [
    'ui.router',
]);

app.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
});
