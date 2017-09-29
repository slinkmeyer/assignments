var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");
var lastNums = require("../lastNums.js");
var tacocat = require("../tacocat.js");

describe("A calculator", function() {
    
    it("should add two numbers", function() {
       assert.equal(calculator.add(1, 2), 3);
        assert.equal(calculator.add(-1, -2), -3);
    });
    
    it("it should subtract two numbers", function() {
        assert.equal(calculator.sub(2, 1), 1);
        assert.equal(calculator.sub(1, -2), 3);
    });
    
    it("it should multiply two numbers", function() {
        assert.equal(calculator.mult(2, 2), 4);
        assert.equal(calculator.mult(4,4), 16);
    });
    
    it("it should divide two numbers", function() {
        assert.equal(calculator.div(12, 2), 6);
        assert.equal(calculator.div(32, 2), 16);
    });
    
});

describe("index checker", function() {
    
    it("should find identical numbers at end of index", function() {
        assert.isTrue(lastNums.lastNums(12, 402));
        assert.isFalse(lastNums.lastNums(12, 403));
    });

});

describe("palindrome verify", function() {
    
    it("should see if something is a palindrome", function () {
        assert.equal(tacocat.palindrome("kayak"), true);
    });
    it("should have the same characters forwards and backwards", function() {
        assert.equal(isPlaindrome("racecar"), true);
    });

});