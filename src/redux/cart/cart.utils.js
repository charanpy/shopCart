export const addItemToCart = (cartItems, cartItemToAdd) => {
            const existingCartItem = cartItems.find(card => card.id === cartItemToAdd.id);

            if (existingCartItem) {
                        return cartItems.map(cartItem =>
                                    cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
            }
            return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
            const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

            //if quantityis one remove 
            if (existingCartItem.quantity === 1) {
                        return cartItems.filter(cart => cart.id !== cartItemToRemove.id);
            }
            //else returning quantity-1
            return cartItems.map(
                        cart => cart.id === cartItemToRemove.id ?
                                    { ...cart, quantity: cart.quantity - 1 } : cart
            )
}