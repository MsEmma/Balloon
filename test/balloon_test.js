var assert = require('assert');
var balloon = require('../balloon.js');

describe("balloon", function() {

  it("should return how many of each colour balloon we ordered", function() {
    result = balloon.getNumbers("4 sets of red, 3 sets of blue, and 3 sets of yellow.", 3);
    assert.deepEqual(result, [{ number: 12 ,color: 'red'},
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                              ]);
  });

  it("should return the prices of each colour balloon we ordered", function() {
    result = balloon.getPrices("R4 for red, R5 for blue, and R5.50 for yellow.");
    assert.deepEqual(result, [{ price: 4 ,color: 'red'},
                              { price: 5 ,color: 'blue'},
                              { price: 5.5 ,color: 'yellow'}
                              ]);
  });

  it("should return how much all the balloons cost", function() {
    result = balloon.getCost([{ number: 12 ,color: 'red'},
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                            ],[{ price: 4 ,color: 'red'},
                              { price: 5 ,color: 'blue'},
                              { price: 5.5 ,color: 'yellow'}]);
    assert.equal(result, 142.5);
  });

  it("should return the total number of balloons", function() {
    result = balloon.getTotalBalloons([{ number: 12 ,color: 'red'},
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                            ]);
    assert.equal(result, 30);
  });

  it("should return the extra cost resulting from inflating the balloons", function() {
    result = balloon.getExtraCost(30, 2);
    assert.equal(result, 60);
  });

  it("should return the number of spare balloons", function() {
    result = balloon.getSpares(30, 25);
    assert.equal(result, 5);
  });

  it("should return the map of popped balloons", function() {
    result = balloon.getPopped("5 red balloons, 1 blue balloon, and 3 yellow balloons popped");
    assert.deepEqual(result,[{ popped: 5 ,color: 'red'},
                         { popped: 1 ,color: 'blue'},
                         { popped: 3 ,color: 'yellow'}]);
  });

  it("should return the number people without balloons", function() {
    result = balloon.getPeopleWithout([{ popped: 5 ,color: 'red'},
                                      { popped: 1 ,color: 'blue'},
                                      { popped: 3 ,color: 'yellow'}]);
    assert.equal(result, 9);
  });

  it("should return a map of the remaining balloons", function() {
    result = balloon.getRemaining([{ number: 12 ,color: 'red'},
                                   { number: 9 ,color: 'blue'},
                                   { number: 9 ,color: 'yellow'}
                                 ],[{ popped: 5 ,color: 'red'},
                                   { popped: 1 ,color: 'blue'},
                                   { popped: 3 ,color: 'yellow'}]);
    assert.deepEqual(result, [{ left: 6 ,color: 'yellow'},
                              { left: 7 ,color: 'red'},
                              { left: 8 ,color: 'blue'}]);
  });

  it("should return  which colour has the most balloons", function() {
    result = balloon.getMostRemaining([{ left: 6 ,color: 'yellow'},
                                       { left: 7 ,color: 'red'},
                                       { left: 8 ,color: 'blue'}]);
    assert.deepEqual(result, { left: 8, color: 'blue' });
  });

  it("should return  which colour has the least balloons", function() {
    result = balloon.getLeastRemaining([{ left: 6 ,color: 'yellow'},
                                        { left: 7 ,color: 'red'},
                                        { left: 8 ,color: 'blue'}]);
    assert.deepEqual(result, { left: 6, color: 'yellow' });
  });

});
