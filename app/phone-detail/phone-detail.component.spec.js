const { identity } = require("angular");

describe('phoneDetail', function() {
    beforeEach(module('phoneDetail'));

    describe('phoneDetailController', function() {
        var $httpBackend, ctrl;
        var xyzPhoneData = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        }

        beforeEach(inject(function($componentcontroller, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

            $routeParams.phoneId = 'xyz';
            ctrl = $componentcontroller('phoneDetail');
        }));

        it('should fetch the phone details', function() {
            jasmine.addCustomEqualityTester(angular.equals);
            expect(ctrl.phone).toEqual({});

            $httpBackend.flush();
            expect(ctrl.phone).toEqual(xyzPhoneData);
        })
    })
})