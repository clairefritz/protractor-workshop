'use strict';

describe("Locator exercises", function () {
    describe("The grandfather of all knowledge", function () {
        beforeEach(function () {
            browser.get('/#/grandfather-of-all-knowledge');
        });

        it('should find the question by webdriver locator :className', function () {
            // 1. Find the element by class name

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.className

            var el = element(by.className('question__field'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getAttribute('placeholder')).toBe('What would you like to ask the grandfather of all knowledge?');
        });

        it('should find the title by webdriver locator :css', function () {
            // 1. Find the element by css

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.css

            var el = element(by.css('#title.title'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).toBe('Grandfather of all knowledge')
        });

        it('should find the title by webdriver locator :id', function () {
            // 1. Find the element by id

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.id

            var el = element(by.id('title'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).toBe('Grandfather of all knowledge')
        });

        it('should find question placeholder by webdriver locator :name', function () {
            // 1. Find the element by name

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.name

            var el = element(by.name('question'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getAttribute('placeholder')).toBe('What would you like to ask the grandfather of all knowledge?');
        });

        it('should find the title by webdriver locator :tagName', function () {
            // 1. Find the element by tagName

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.tagName

            var el = element(by.tagName('h2'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).toBe('Grandfather of all knowledge')
        });

        it('should find the title by webdriver locator :xpath', function () {
            // 1. Find the element by xpath

            // see: http://angular.github.io/protractor/#/api?view=webdriver.By.xpath

            var el = element(by.xpath('//*[@id="title"]'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).toBe('Grandfather of all knowledge')
        });
    });
    describe("The repeat after me", function () {
        beforeEach(function () {
            browser.get('/#/repeat-after-me');
        });

        it('should find the sequence by protractor locator :binding', function () {
            // 1. Find the element by binding

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.binding

            var el = element(by.binding('af.sequence'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).not.toBeUndefined();
        });

        it('should find the sequence by protractor locator :exactBinding', function () {
            // 1. Find the element by exact binding

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.exactBinding

            var el = element(by.exactBinding('af.sequence'));  /* implement me */
            expect(el.isPresent()).toBe(true);
            expect(el.getText()).not.toBeUndefined();
        });

        it('should find the Try again button by protractor locator :buttonText', function () {
            // 1. Find the element by buttonText

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.buttonText

            var el = element(by.buttonText('Try again'));  /* implement me */
            expect(el.isPresent()).toBe(true);
        });

        it('should find the Try again button by protractor locator :partialButtonText', function () {
            // 1. Find the element by partialButtonText

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.partialButtonText

            var el = element(by.partialButtonText('Try'));  /* implement me */
            expect(el.isPresent()).toBe(true);
        });

        it('should find the title by protractor locator :cssContainingText', function () {
            // 1. Find the element by cssContainingText

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.cssContainingText

            var el = element(by.cssContainingText('', 'Repeat after me - '));  /* implement me */
            expect(el.isPresent()).toBe(true);
        });
    });
    describe("The releases", function () {
        beforeEach(function () {
            browser.get('/#/releases');
        });

        it('should find the releases by protractor locator :repeater', function () {
            // 1. Find the element by repeater

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.repeater

            var el = element(by.repeater('release in rel.releases'));  /* implement me */
            expect(el.isPresent()).toBe(true);
        });

        it('should find the releases by protractor locator :exactRepeater', function () {
            // 1. Find the element by exactRepeater

            // see: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.exactRepeater

            var el = element(by.exactRepeater('release in rel.releases'));  /* implement me */
            expect(el.isPresent()).toBe(true);
        });
    });
});
