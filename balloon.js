exports.getNumbers = function(string1, numberInSet) {

  var list = string1.replace(/(sets of )|and /g, "")
    .replace(".", "")
    .split(", ");

  var numbers = list.map(function(str) {
    return {
      number: (Number(str.match(/\d+/)) * numberInSet),
      color: str.match(/\D+/).join().trim()
    }
  });

  return (numbers);
}

exports.getPrices = function(string2) {

  var string = string2.substring(0, string2.length - 1);
  var list = string.replace(/R|and /g, "")
    .replace(/for /g, "")
    .split(", ");

  var ls = [];

  list.forEach(function(str) {
    ls.push(str.split(" "));
  })

  var prices = ls.map(function(arr) {
    return {
      price: Number(arr[0]),
      color: arr[1]
    }
  });

  return prices;
}

exports.getCost = function(numbers, prices) {

  var totalPrice = 0;

  numbers.forEach(function(numObj) {
    prices.forEach(function(priceObj) {
      if (numObj.color === priceObj.color) {
        totalPrice += (numObj.number * priceObj.price);
      }
    })
  })

  return totalPrice;
}

exports.getTotalBalloons = function(numbers) {

  totalBalloons = 0;

  numbers.forEach(function(obj) {
    totalBalloons += obj.number;
  })

  return totalBalloons;

}

exports.getExtraCost = function(totalBalloons, extraCost) {

  var totalExtraCost = totalBalloons * extraCost;

  return totalExtraCost;

}

exports.getSpares = function(totalBalloons, numberOfPeople) {

  return totalBalloons - numberOfPeople;

  return spares;

}

exports.getPopped = function(string3) {

  var list = string3.match(/(\d+)(\s)(\w+)/g);

  var popped = list.map(function(str) {
    return {
      popped: Number(str.match(/\d+/)),
      color: str.match(/\D+/).join().trim()
    }
  });

  return popped;

}

exports.getPeopleWithout = function(popped) {

  var peopleWithout = 0;

  popped.forEach(function(obj) {
    peopleWithout += obj.popped;
  });

  return peopleWithout;

}
