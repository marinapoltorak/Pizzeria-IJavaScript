//business logic goes here
//pizza constructor
function Pizza(size) {

  this.size = size,
  this.toppings = [],
  this.price = 0;
}

//this will add toppings to the pizza
Pizza.prototype.addToppings = function (toppings) {
  this.toppings = toppings;
};

//this will add price to the pizza
Pizza.prototype.calculatePrice = function () {
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
function showPizza(pizza) {
  var toppingsString = String(pizza.toppings.join(', '));
  $('form#new-order').hide();
  $('#your-pizza').show();
  $('#show-size').append(pizza.size);
  $('#show-price').append(pizza.price);
  if (pizza.toppings.length > 0) {
    $('#show-toppings').show();
    $('#show-toppings').append(toppingsString);
  }
}

$(document).ready(function () {
    $('form#new-order').submit(function (event) {
      event.preventDefault();
      var inputtedSize = $('select.new-pizza-size').val();
      var inputtedTopping1 = $('select.new-topping1').val();
      var inputtedTopping2 = $('select.new-topping2').val();
      var inputtedTopping3 = $('select.new-topping3').val();
      var myPizza = new Pizza(inputtedSize);

      myPizza.addToppings([inputtedTopping1, inputtedTopping2, inputtedTopping3]);
      myPizza.calculatePrice();
      showPizza(myPizza);

      console.log(myPizza);
    });
  });

function refreshPage() {
  window.location.reload();
}
