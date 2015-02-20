var Pizza = {pizzaSlices: function() {
                if(this.pizzaSize === "small" && this.pizzaTopping === "cheese") {
                  var slices = 6;
                } else if ((this.pizzaSize === "medium" && this.pizzaTopping === "cheese") || (this.pizzaSize === "small" && this.pizzaTopping === "pepperoni")) {
                  var slices = 8;
                } else if ((this.pizzaSize === "large" && this.pizzaTopping === "cheese") || (this.pizzaSize === "medium" && this.pizzaTopping === "pepperoni")) {
                  var slices = 10;
                } else {
                  var slices = 12;
                }
                return slices;
              }
            };

$(document).ready(function() {
  $("form#create-pizza").submit(function(event) {
    event.preventDefault();

    var selectedSize = $("select#pizza-size").val();
    var selectedTopping = $("select#pizza-topping").val();
    var newPizza = Object.create(Pizza);
    newPizza.pizzaSize = selectedSize;
    newPizza.pizzaTopping = selectedTopping;

    $("ul#pizzas").append("<li><span class='pizza'>" + newPizza.pizzaSize + " " + newPizza.pizzaTopping + "</span></li>");

    // $("input#pizza-size").val("");
    // $("input#pizza-topping").val("");

    $(".pizza").last().click(function() {
      $("#show-slices").show();
      $("#size").text(newPizza.pizzaSize);
      $("#topping").text(newPizza.pizzaTopping);
      $("#slices").text(newPizza.pizzaSlices());
    });
  });
});
