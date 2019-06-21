//user interface goes here

//business logic goes here
//pizza constructor
function Pizza(size, toppings, price) {
  this.size = size,
  this.toppings = [],
  this.price = price;
}

//this will add toppings to the pizza
Pizza.prototype.addToppings = function (inputTopping1, inputTopping2, inputTopping3,
  inputTopping4) {
  if (inputTopping1 !== '') {
    this.toppings.push(inputTopping1 + ',' + '');
  }

  if (inputTopping2 !== '') {
    this.toppings.push(inputTopping2 + ',' + '');
  }

  if (inputTopping3 !== '') {
    this.toppings.push(inputTopping3 + ',' + '');
  }
};

//this will add price to the pizza
Pizza.prototype.addPrice = function () {
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
  }else {
    this.price = 25;
    this.price += (this.toppings.length * 5);
    console.log(this.price);
    console.log(this.toppings.length);
  }

  return this.price;
};

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
  }
}
