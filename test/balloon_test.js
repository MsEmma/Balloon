var assert = require('assert');
var balloon = require('../balloon.js');

describe("balloon", function() {

  it("should return how many of each colour balloon we ordered", function() {
    result = balloon.getNumbers("4 sets of red, 3 sets of blue, and 3 sets of yellow.");
    assert.deepEqual(result, [{ number: 12 ,color: 'red'},
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                              ]);
  });

  it("should return how many of each colour balloon we ordered", function() {
    result = balloon.getPrices("R4 for red, R5 for blue, and R5.50 for yellow.");
    assert.deepEqual(result, [{ price: 4 ,color: 'red'},
                              { price: 5 ,color: 'blue'},
                              { price: 5.5 ,color: 'yellow'}
                              ]);
  });

  it("should return how much all the balloons cost", function() {
    result = balloon.getNumbers([{ number: 12 ,color: 'red'},,
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                            ],[{ price: 4 ,color: 'red'},
                              { price: 5 ,color: 'blue'},
                              { price: 5.5 ,color: 'yellow'}]);
    assert.equal(result, 142.5);
  });

  it("should return the extra cost resulting from inflating the balloons", function() {
    result = balloon.getNumbers([{ number: 12 ,color: 'red'},,
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                            ], cost);
    assert.equal(result, 60);
  });

  it("should return the number of spare balloons", function() {
    result = balloon.getNumbers([{ number: 12 ,color: 'red'},,
                              { number: 9 ,color: 'blue'},
                              { number: 9 ,color: 'yellow'}
                            ], numberOfPeople);
    assert.equal(result, 35);
  });

});
