// user logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    let size = $("input[name=size]:checked").val();
    let crust = $("input[name=crust]:checked").val();
    let meat = $("input[name=meat]:checked").val();
  });
});