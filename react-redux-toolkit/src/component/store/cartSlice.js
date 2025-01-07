import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,actions){
            state.push(actions.payload)
        },
        del(state,actions){
            // console.log(actions)
            let removedArr = state.filter((ele,i)=>{
                return actions.payload !== ele.id
            })
            return removedArr
        }
    }

})
export const {add,del} = cartSlice.actions 
export default cartSlice.reducer;