describe('Controller: PocController', function () {

    // load the controller's module
    beforeEach(module('karmaPocModule'));

    var PocController, scope;

    var testdata = [
        {
            id:0,
            name:'Angular man',
            age:3
        },
        {
            id:1,
            name:'Bower guy',
            age:4
        }
    ];

    // define the mock service (we are mocking the factory inside the pocService.
    beforeEach(function () {
        dataFactoryMock = {

            getData: function () {
            },

            getSpecificData: function (index) {
            }
        };
        spyOn(dataFactoryMock, "getData").and.returnValue(testdata);
        spyOn(dataFactoryMock, "getSpecificData").and.returnValue(testdata[0]);
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {

        scope = $rootScope.$new();
        PocController = $controller('PocController', {$scope: scope, dataFactory: dataFactoryMock});

    }));

    it('should have correct values on scope', function () {
        expect(scope.name).toBe('World');
        expect(scope.user).toBe(testdata[0]);
        expect(scope.users).toBe(testdata);
    });


});
