var Pizza = {pizzaSlices: function() {
                if(this.pizzaSize === "small" && this.pizzaTopping === "cheese") {
                  var slices = 6;
                } else if (this.pizzaSize === "medium" && this.pizzaTopping === "cheese") {
                  var slices = 8;
                }
                return slices;
              }
            };
