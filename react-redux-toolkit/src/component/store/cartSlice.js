import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,actions){
            state.push(actions.payload)
        }
    }

})
export const {add} = cartSlice.actions 
export default cartSlice.reducer;