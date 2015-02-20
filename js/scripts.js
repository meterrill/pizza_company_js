var Pizza = {pizzaSlices: function() {
                if(this.pizzaSize === "small" && this.pizzaTopping === "cheese") {
                  var slices = 6;
                } else if ((this.pizzaSize === "medium" && this.pizzaTopping === "cheese") || (this.pizzaSize === "small" && this.pizzaTopping === "pepperoni")) {
                  var slices = 8;
                } else if (this.pizzaSize === "large" && this.pizzaTopping === "cheese") {
                  var slices = 10;
                }
                return slices;
              }
            };
