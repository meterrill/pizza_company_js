describe("Pizza", function() {
  describe("pizzaSlices", function() {
    it("returns 6 if size is small and topping is cheese", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaSize = "small";
      testPizza.pizzaTopping = "cheese";
      testPizza.pizzaSlices();
      expect(testPizza.pizzaSlices()).to.equal(6);
    });

    it("returns 8 if size is medium and topping is cheese", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaSize = "medium";
      testPizza.pizzaTopping = "cheese";
      testPizza.pizzaSlices();
      expect(testPizza.pizzaSlices()).to.equal(8);
    });
  });
});
