import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";


const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        status:'idle'
    },
    reducers:{
        // fetchProducts(state,action){
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status = 'error'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = 'idle'
        })
    }
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         let data = await fetch('https://fakestoreapi.com/products');
//         let result = await data.json();
//         dispatch(fetchProducts(result))
//     }
// }

export const getProducts = createAsyncThunk('product/get',async()=>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;
})