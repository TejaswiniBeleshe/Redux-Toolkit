import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name:'products',
    initialState:{
        data:[]
    },
    reducers:{

    }
})

export const {} = productSlice.actions
export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        
    }
}