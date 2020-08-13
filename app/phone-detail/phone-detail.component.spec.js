const { identity } = require("angular");

describe('phoneDetail', function() {
    beforeEach(module('phoneDetail'));

    describe('phoneDetailController', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentcontroller, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({ name: 'phone xyz' });

            $routeParams.phoneId = 'xyz';
            ctrl = $componentcontroller('phoneDetail');
        }));

        it('should fetch the phone details', function() {
            expect(ctrl.phone).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.phone).toEqual({ name: 'phone xyz' });
        })
    })
})