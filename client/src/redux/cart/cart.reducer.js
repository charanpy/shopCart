import { cartType } from './cart.type'
import { addItemToCart, removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
            hidden: true,
            cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
            const { type, payload } = action;
            switch (type) {
                        case cartType.TOGGLE_CART_HIDDEN:
                                    return {
                                                ...state,
                                                hidden: !state.hidden
                                    }

                        case cartType.ADD_ITEM:
                                    return {
                                                ...state,
                                                cartItems: addItemToCart(state.cartItems, payload)
                                    }
                        case cartType.CLEAR_ITEM_FROM_CART:
                                    return {
                                                ...state,
                                                cartItems: state.cartItems.filter(cart => cart.id !== payload.id)
                                    }

                        case cartType.REMOVE_ITEM:
                                    return {
                                                ...state,
                                                cartItems: removeItemFromCart(state.cartItems, payload)
                                    }

                        case cartType.CLEAR_CART:
                                    return {
                                                ...state,
                                                cartItems: []
                                    }

                        default:
                                    return state;
            }
}

export default cartReducer;