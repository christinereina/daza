// business logic

function Pizza (size, crust, meat) {
  this.size = size;
  this.crust = crust;
  this.meat = meat;
  this.price = 0;
}

Pizza.prototype.calculateOrder = function () {
  if (this.size === "sm") {
    this.price = 10;
} else {
    this.price= 16;
};
  if (this.crust === "glutenFree") {
    this.price += 1.50;
  } else if (this.crust === "cauliflower") {
    this.price += 2;
  }
  return this.price;
  };

  Pizza.prototype.addToppings = function () {
    // for (var counter = 0; counter < userInput; counter +)
    if (this.meat === "1") {
      this.price += 1.50;
  }
  return this.price;
  };

// user logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    let size = $("input[name=size]:checked").val();
    let crust = $("input[name=crust]:checked").val();
    let meat = $("input[name=meat]:checked").val();
    var newPizza = new Pizza (size, crust, meat);
    newPizza.calculateOrder();
    newPizza.addToppings();
    $("#output").show();
    $('div#output').text(`Order Total: ${newPizza.price}`)
    console.log(newPizza.price)
  });
});