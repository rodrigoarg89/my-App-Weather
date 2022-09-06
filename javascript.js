const store = () => {

  let market = {
    products: [],
    addProduct(product) {
      this.products.push(product);
    },

    removeProduct(product) {
      this.products.filter((prod, i, array) => {
        if (prod === product) {
          array.splice(i, 1)
          return array
        }
      });
    },

    listProducts() {
      return this.products
    }
  }
  return market
}
// completa aquí la función store

const myStore = store();
myStore.addProduct("phones");
myStore.addProduct("cereal");
myStore.removeProduct("phones");
myStore.addProduct("flour");
console.log(myStore.listProducts());