import { CartActionTypes } from "./cart-types";

export const ToggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const ClearItem = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const RemoveItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})