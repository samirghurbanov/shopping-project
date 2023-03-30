import { createSlice } from "@reduxjs/toolkit";

const basketSlicer = createSlice({
    name: 'basket',
    initialState: {
        products: []
    },
    reducers: {
        addToBasket: (state,{payload}) => {
            state.products.push(payload)
        },
        deleteProduct: (state, {payload}) => {
            return{
                ...state, products: state.products.filter((item) => item.id !== payload)
            }
        },
        incrementCount: (state, {payload}) => {
            return {
                ...state, products: state.products.map((item) => item.id === payload ? {...item, count: item.count + 1} : item)
            }
        },
        decrementCount: (state, {payload}) => {
            return {
                ...state, products: state.products.map((item) => item.id === payload ? {...item, count: item.count > 1 ? item.count - 1 : 1} : item)
            }
        }
    }
})

export default basketSlicer.reducer
export const {addToBasket,deleteProduct,incrementCount, decrementCount} = basketSlicer.actions