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
      this.price += this.meat.length;
      return this.price;
  };

// user logic

$(document).ready(function() {
  $('#order').click(function(){
    $(".orderForm").show();
    $("#header").hide();
    });

  $("#pizza").submit(function(event) {
    event.preventDefault();
    let size = $("input[name=size]:checked").val();
    let crust = $("input[name=crust]:checked").val();
    let meat = []
    $("input[name=meat]:checked").each(function() {
      meat.push($(this).val());
    });

    var newPizza = new Pizza (size, crust, meat);
    newPizza.calculateOrder();
    $(".output").show();
    $(".orderForm").hide();
    $("#order").hide();
    $('div#output').text(`Order Total: ${newPizza.price}`)
  });
});