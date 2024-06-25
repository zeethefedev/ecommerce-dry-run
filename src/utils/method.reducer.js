export const updateQuantity = (products, currentProduct, quantityChange) => {
  switch (quantityChange) {
    case "increase":
      return products.map((prod) =>
        prod.id === currentProduct.id
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod
      );
    case "decrease":
      return products.map((prod) =>
        prod.id === currentProduct.id
          ? {
              ...prod,
              quantity: prod.quantity === 0 ? prod.quantity : prod.quantity - 1,
            }
          : prod
      );
    case "remove":
      return products.map((prod) =>
        prod.id === currentProduct.id ? { ...prod, quantity: 0 } : prod
      );
    default:
      break;
  }
};
