/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
 
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = require('chai').assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = require('chai').expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = require('chai').should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = require('chai').should();
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123412341234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 17', function(){
    detectNetwork('60111234123412341').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 18', function(){
    detectNetwork('601112341234123412').should.equal('Discover');
  });  
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011123412341234123').should.equal('Discover');
  });
  it('has a prefix of 64 and a length of 16', function(){
    detectNetwork('6411123412341234').should.equal('Discover');
  });
  it('has a prefix of 64 and a length of 17', function(){
    detectNetwork('64111234123412341').should.equal('Discover');
  });
  it('has a prefix of 64 and a length of 18', function(){
    detectNetwork('641112341234123412').should.equal('Discover');
  });
  it('has a prefix of 64 and a length of 19', function(){
    detectNetwork('6411123412341234123').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6511123412341234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 17', function(){
    detectNetwork('65111234123412341').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 18', function(){
    detectNetwork('651112341234123412').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511123412341234123').should.equal('Discover');
  });
  
  
});

describe('Maestro', function() {
  var should = require('chai').should();

  it('has a prefix of 6 and a length of 12', function(){
    detectNetwork('612312341234').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 13', function(){
    detectNetwork('6123123412341').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 14', function(){
    detectNetwork('61231234123412').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 15', function(){
    detectNetwork('612312341234123').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 16', function(){
    detectNetwork('6123123412341234').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 17', function(){
    detectNetwork('61231234123412341').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 18', function(){
    detectNetwork('612312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 6 and a length of 19', function(){
    detectNetwork('6123123412341234123').should.equal('Maestro');
  });
  //--------------50--------------------
    it('has a prefix of 50 and a length of 12', function(){
    detectNetwork('502312341234').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 13', function(){
    detectNetwork('5023123412341').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 14', function(){
    detectNetwork('50231234123412').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 15', function(){
    detectNetwork('502312341234123').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 16', function(){
    detectNetwork('5023123412341234').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 17', function(){
    detectNetwork('50231234123412341').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 18', function(){
    detectNetwork('502312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 50 and a length of 19', function(){
    detectNetwork('5012312341234123412').should.equal('Maestro');
  });
  //------------------56------------------------
    it('has a prefix of 56 and a length of 12', function(){
    detectNetwork('562312341234').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 13', function(){
    detectNetwork('5623123412341').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 14', function(){
    detectNetwork('56231234123412').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 15', function(){
    detectNetwork('562312341234123').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 16', function(){
    detectNetwork('5623123412341234').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 17', function(){
    detectNetwork('56312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 18', function(){
    detectNetwork('562312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 56 and a length of 19', function(){
    detectNetwork('5623123412341234123').should.equal('Maestro');
  });
  //---------------------57--------------------------------
    it('has a prefix of 57 and a length of 12', function(){
    detectNetwork('572312341234').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 13', function(){
    detectNetwork('5723123412341').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 14', function(){
    detectNetwork('57231234123412').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 15', function(){
    detectNetwork('572312341234123').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 16', function(){
    detectNetwork('5723123412341234').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 17', function(){
    detectNetwork('57231234123412341').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 18', function(){
    detectNetwork('572312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 57 and a length of 19', function(){
    detectNetwork('5723123412341234123').should.equal('Maestro');
  });
  //-------------------------------------58-------------------
    it('has a prefix of 58 and a length of 12', function(){
    detectNetwork('582312341234').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 13', function(){
    detectNetwork('5823123412341').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 14', function(){
    detectNetwork('58231234123412').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 15', function(){
    detectNetwork('582312341234123').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 16', function(){
    detectNetwork('5823123412341234').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 17', function(){
    detectNetwork('58231234123412341').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 18', function(){
    detectNetwork('582312341234123412').should.equal('Maestro');
  });
  it('has a prefix of 58 and a length of 19', function(){
    detectNetwork('5823123412341234123').should.equal('Maestro');
  });
});


//, , , , ,  lengths: 16, 18, 19
describe('UnionPay', function(){
var should = require('chai').should();

//-----------4903------------------------------
  it('has a prefix of 4903 and a length of 16', function(){
    detectNetwork('4903490349034903').should.equal('UnionPay');
  });
  it('has a prefix of 4903 and a length of 18', function(){
    detectNetwork('490349034903490312').should.equal('UnionPay');
  });
  it('has a prefix of 4903 and a length of 19', function(){
    detectNetwork('4903490349034903123').should.equal('UnionPay');
  });
//------------------4905-----------------------
  it('has a prefix of 4905 and a length of  16', function(){
    detectNetwork('4905490549054905').should.equal('UnionPay');
  });
  it('has a prefix of 4905 and a length of 18', function(){
    detectNetwork('490549054905490512').should.equal('UnionPay');
  });
  it('has a prefix of 4905 and a length of 19', function(){
    detectNetwork('4905490549054905123').should.equal('UnionPay');
  });  
//------------------4911-----------------------
  it('has a prefix of 4911 and a length of 16', function(){
    detectNetwork('4911491149114911').should.equal('UnionPay');
  });
  it('has a prefix of 4911 and a length of 18', function(){
    detectNetwork('491149114911491112').should.equal('UnionPay');
  });
  it('has a prefix of 4911 and a length of 19', function(){
    detectNetwork('4911491149114911123').should.equal('UnionPay');
  });
//------------------4936-----------------------
  it('has a prefix of 4936 and a length of 16', function(){
    detectNetwork('4936493649364936').should.equal('UnionPay');
  });
  it('has a prefix of 4936 and a length of 18', function(){
    detectNetwork('493649364936493612').should.equal('UnionPay');
  });
  it('has a prefix of 4936 and a length of 19', function(){
    detectNetwork('4936493649364936123').should.equal('UnionPay');
  });
//-----------------564182----------------------
  it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork('5641825641821234').should.equal('UnionPay');
  });
  it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork('564182564182564182').should.equal('UnionPay');
  });
  it('has a prefix of 564182 and a length of 19', function(){
    detectNetwork('5641825641825641821').should.equal('UnionPay');
  });
//-----------------633110----------------------
  it('has a prefix of 633110 and a length of 16', function(){
    detectNetwork('6331106331101234').should.equal('UnionPay');
  });
  it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork('633110633110633110').should.equal('UnionPay');
  });
  it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331106331106331101').should.equal('UnionPay');
  });
//------------------6333-----------------------
  it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333633363336333').should.equal('UnionPay');
  });
  it('has a prefix of 6333 and a length of 18', function(){
    detectNetwork('633363336333633312').should.equal('UnionPay');
  });
  it('has a prefix of 6333 and a length of 19', function(){
    detectNetwork('6333633363336333123').should.equal('UnionPay');
  });
//------------------6759-----------------------
  it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759675967596759').should.equal('UnionPay');
  });
  it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675967596759675912').should.equal('UnionPay');
  });
  it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759675967596759123').should.equal('UnionPay');
  });

});

describe('should support Switch')
