describe('phoneList', function() {
    beforeEach(module('phoneList'));
    describe('phoneListController', function() {
        var ctrl;
        beforeEach(inject(function($componentController) {
            ctrl = $componentController('phoneList');
        }))
        it('should create `phones` model with 3 phones', inject(function($componentController) {
            expect(ctrl.phones.length).toBe(3);
        }));

        if ('should set a default value for the `orderprop` model', function() {
                expect(ctrl.orderProp).toBe('age');
            });
    });
});