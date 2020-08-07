describe('phoneList', function() {
    beforeEach(module('phonecatApp'));
    describe('phoneListController', function() {
        it('should create `phones` model with 3 phones', inject(function($componentController) {
            var ctrl = $componentController('phoneList');
            expect(ctrl.phones.length).toBe(3);
        }));
    });
});