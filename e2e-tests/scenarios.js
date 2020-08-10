'use strict';

const { browser } = require("protractor");
const { element } = require("angular");

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

            expect(phoneList.count()).toBe(20);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(8);
        });

        it('should be possible to control phone order via the drop-down menu', function() {
            var queryField = element(by.model('$ctrl.query'));
            var orderSelect = element(by.model('$ctrl.oderProp'));
            var nameOption = orderSelect.element(by.css('option[value="name"]'));
            var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

            function getNames() {
                return phoneNameColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            queryField.sendKeys('tablet');

            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with WiFi',
                'Motorola XOOM\u2122'
            ]);
        });

        it('should render phone specific links', function() {
            var query = element(by.model('$ctrl.query'));
            query.sendKeys('nexus');

            element.all(by.css('.phones li a')).first().click();
            expect(browser.getCurrentUrl()).toContain('index.html#!/phones/nexus-s');
        });
    });
});