export const addItemToCart = (cartItems, productToAdd) => {
  // checking if product exist
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.cartProductId === productToAdd.cartProductId
  );

  if (!existingProduct) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartItems.map((cartItem) =>
      cartItem.cartProductId === productToAdd.cartProductId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};
