export const updateQuantity = (products, currentProduct, quantityChange) => {
  switch (quantityChange) {
    case "increase":
      return products.map((prod) => {
        if (prod.id === currentProduct.id) {
          const cnt = Number(prod.chosen.quantity);
          prod.chosen.quantity = cnt + 1;
        }
        return prod;
      });
    case "decrease":
      return products.map((prod) => {
        if (prod.id === currentProduct.id) {
          const cnt = prod.chosen.quantity;
          prod.chosen.quantity = cnt === 0 ? cnt : cnt - 1;
        }
        return prod;
      });
    case "remove":
      return products.map((prod) => {
        if (prod.id === currentProduct.id) {
          prod.chosen.quantity = 0;
        }
        return prod;
      });
    default:
      break;
  }
};
