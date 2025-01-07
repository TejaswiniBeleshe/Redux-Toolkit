import {createSlice} from "@reduxjs/toolkit"


const crudSlice = createSlice({
    name:'crud',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            console.log(action)
            let filteredData = state.filter(ele=>{
                return ele.id !== action.payload
            })
            return filteredData
        }

    }
})

export const {add,remove} = crudSlice.actions;
export default crudSlice.reducer;