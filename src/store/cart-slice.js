import {
    createSlice
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItems = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItems) {

                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalItemPrice: newItem.price,
                    name: newItem.name,
                });
            } else {

                existingItems.quantity++;
                existingItems.totalItemPrice = Number(existingItems.totalItemPrice) + Number(newItem.price);

            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItems = state.items.find(item => item.id === id);
            if (existingItems.quantity > 1) {
                existingItems.quantity--;
            } else {
                state.items = state.items.filter((p) => p.id !== id);
                state.totalPrice = state.totalPrice - existingItems.price;
            }
        },
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice;