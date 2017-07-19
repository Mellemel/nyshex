describe('LoginController', () => {

    beforeEach(module('nyshexApp'));

    let $rootScope;
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
    }));

    let LoginCtrl;
    beforeEach(inject(($controller) => {
        LoginCtrl = $rootScope.$new();
        $controller('LoginCtrl', {
            $scope: LoginCtrl
        });
    }));

    describe('initialization', () => {
        it('should be an object', () => {
            expect(LoginCtrl).to.be.an('object');
        });
    });
});
