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

export const removeItemFromCart = (cartItems, cartProductId) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.cartProductId === cartProductId
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.cartProductId !== cartProductId
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.cartProductId === cartProductId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
