'use strict';

const { browser } = require("protractor");

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function() {

    beforeEach(function() {
        browser.get('index.html');
    });

});

describe('PhoneCat Application', function() {
    describe('phoneList', function() {
        beforeEach(function() {
            browser.get('index.html');
        });
        it('should filter the phone list as a user types into the search box', function() {
            var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
            var query = elementt(by.model('$ctrl.query'));

            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(3);
        });
    });
});