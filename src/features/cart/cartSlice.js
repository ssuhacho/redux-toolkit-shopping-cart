import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'

const initialState = {
    cartItems : cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            // console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>
                item.id !== itemId)
        }
    },
});

console.log(cartSlice);

const { actions, reducer } = cartSlice;

export const { clearCart, removeItem } = actions;

export default reducer;