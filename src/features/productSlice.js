import { createSlice } from "@reduxjs/toolkit";
import { filterByCategory } from "../utlis/filterByCategory";


const initialState = {
    allProduct: [],
    filterProduct: [],
    cart: []
}

const productSlice = createSlice(
    {
        name: "data",
        initialState,
        reducers: {
            getAllProduct(state, action) {
                state.allProduct = [...state.allProduct, ...action.payload]
            },
            searchFilterProduct(state, action) {
                const { payload } = action
                state.filterProduct = state.allProduct.filter((data) => data.color.toLowerCase().includes(payload.toLowerCase()) || data.type.toLowerCase().includes(payload.toLowerCase()) || data.name.toLowerCase().includes(payload.toLowerCase()))
            },
            selectedFilterProduct(state, action) {
                const category = action.payload
                if (category) {
                    const filt = filterByCategory(state,category)
                    state.filterProduct = filt;
                }
            },
            addToCart(state, action) {
                const existingItem = state.cart.find((cartItem) => cartItem.id === action.payload.id)
                if (existingItem) {
                    const updateItemQuantity = state.cart.map((product) =>
                        product.id === action.payload.id ? { ...product, itemQuantity: product.itemQuantity + 1 } : product
                    )
                    state.cart = updateItemQuantity
                }
                else {
                    state.cart.push(action.payload)
                }
            },
            increaseItem(state, action) {
                const existingItem = state.cart.find((cartItem) => cartItem.id === action.payload)
                if (existingItem) {
                    existingItem.itemQuantity += 1
                }
            },
            decreaseItem(state, action) {
                const existingItem = state.cart.find((cartItem) => cartItem.id === action.payload)
                if (existingItem) {
                    existingItem.itemQuantity -= 1
                    if (existingItem.itemQuantity === 0) {
                        state.cart = state.cart.filter((item) => item.id !== action.payload)
                    }
                }
            },
            removeItemFromCart(state, action) {
                state.cart = state.cart.filter((item) => item.id !== action.payload)
            }
        }
    }
)

export const { getAllProduct, searchFilterProduct, selectedFilterProduct, addToCart, increaseItem, decreaseItem, removeItemFromCart } = productSlice.actions

export default productSlice.reducer