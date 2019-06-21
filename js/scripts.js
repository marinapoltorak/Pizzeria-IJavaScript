//business logic goes here
//pizza constructor
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = [],
  this.price = 0;
}

//this will add toppings to the pizza
Pizza.prototype.addTopping = function (inputtedTopping1, inputtedTopping2, inputtedTopping3) {
  if (inputtedTopping1 !== '') {
    this.toppings.push(inputtedTopping1 + ',' + ' ');
  }

  if (inputtedTopping2 !== '') {
    this.toppings.push(inputtedTopping2 + ',' + ' ');
  }

  if (inputtedTopping3 !== '') {
    this.toppings.push(inputtedTopping3 + ',' + ' ');
  }
};

//this will add price to the pizza
Pizza.prototype.addPrice = function () {
  if (this.size === 'small') {
    this.price = 6;
    this.price += (this.toppings.length);
  } else if (this.size === 'medium') {
    this.price = 8;
    this.price += (this.toppings.length * 2);
    console.log(this.price);
    console.log(this.toppings.length);
  } else if (this.size === 'large') {
    this.price = 10;
    this.price += (this.toppings.length * 3);
    return this.price;
  }
};

//user interface goes here
function yourPizza(size, toppings, price) {
  var toppingsString = toppings;
  $('form#new-order').hide();
  $('#your-pizza').show();
  $('#show-size').append(size);
  $('#show-price').append(price);
  if (toppings.length > 0) {
    $('#show-toppings').show();
    $('#show-toppings').append(String(toppingsString.join('').slice(0, -2)));
  }
}

$(document).ready(function () {
    $('form#new-order').submit(function (event) {
      event.preventDefault();
      var inputtedSize = $('select.new-pizza-size').val();
      var inputtedTopping1 = $('select.new-topping1').val();
      var inputtedTopping2 = $('select.new-topping2').val();
      var inputtedTopping3 = $('select.new-topping3').val();
      var myPizza = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2,
      inputtedTopping3, 0);
      myPizza.addTopping(inputtedTopping1, inputtedTopping2, inputtedTopping3);
      myPizza.addPrice();
      yourPizza(myPizza.size, myPizza.toppings, myPizza.price);
      return myPizza;
      console.log(myPizza);
    });
  });

function refreshPage() {
  window.location.reload();
}
