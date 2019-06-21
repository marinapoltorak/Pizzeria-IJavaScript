//business logic goes here
//pizza constructor
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = [],
  this.price = price;
}

//this will add toppings to the pizza
Pizza.prototype.addToppings = function () {
  this.toppings.push(topping);
};

//this will add price to the pizza
Pizza.prototype.addPrice = function () {

  //business logic for toppings--
  function Topping(topping1, topping2, topping3) {
    this.topping1 = topping1,
    this.topping2 = topping2,
    this.topping3 = topping3;
  }

  Topping.prototype.toppingString = function () {
    return this.topping1 + ', ' + this.topping2 + ' and ' + this.topping3;
  };

  //business logic for addPrice
  function Price(price) {
    this.price = price;
  }

  Price.prototype.addUpPrice = function () {
    if (this.size === 'small') {
      this.price = 10;
      this.price += this.toppings.length;
    }else if (this.size === 'medium') {
      this.price = 15;
      this.price += (this.toppings.length * 2);
      console.log(this.price);
      console.log(this.toppings.length);
    }else if (this.size === 'large') {
      this.price = 20;
      this.price += (this.toppings.length * 3);
      console.log(this.price);
      console.log(this.toppings.length);
    }

    return this.price;
  };
};

//user interface goes here
var yourPizza = new Pizza();

function displayPizzaDetails(pizzaToDisplay) {
  var toppingsList = $('ul#your-pizza');
  var htmlForPizzaDetails = '';
  pizzaToDisplay.toppings.forEach(function(topping) {
    htmlForPizzaDetails += '<li' + this.toppings + '>' + toppings.topping1 + ', ' + topping.topping2 + ', and '
    toppings.topping3 + '</li>';
  })
}

$(document).ready(function () {

  $('form#new-order').submit(function (event) {
    event.preventDefault();
    var inputSize = $('select.new-pizza-size').val();
    var inputTopping1 = $('select.new-inputTopping1').val();
    var inputTopping2 = $('select.new-inputTopping2').val();
    var inputTopping3 = $('select.new-inputTopping3').val();
  });

  //create an instanse of Pizza from inputs

  yourPizza.addToppings(inputTopping1, inputTopping2, inputTopping3);
  yourPizza.addPrice(price);

  // YourPizza(yourPizza.size, yourPizza.toppings,  yourPizza.price);
  console.log(yourPizza);
  console.log(yourPizza);

  //this will construct pizza order and show size and price
  function YourPizza(size, toppings, price) {
    var toppingsString = toppings;
    $('form#new-order').hide();
    $('#your-pie').show();
    $('show-size').append(size);
    $('show-price').append(price);
    if (toppings.length > 0) {
      $('#show-toppings').show();
      $('#show-toppings').append(String(toppings.join('').slice(0, -2)));
      console.log(yourPizza);
    }
  }
});
