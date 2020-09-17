import { cartType } from './cart.type'

export const toggleCartHidden = () => ({
            type: cartType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
            type: cartType.ADD_ITEM,
            payload: item
})

export const clearItemFromCart = item => ({
            type: cartType.CLEAR_ITEM_FROM_CART,
            payload: item
})

export const removeItem = item => ({
            type: cartType.REMOVE_ITEM,
            payload: item
})