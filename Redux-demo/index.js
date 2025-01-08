// creating an action

const CAKE_ORDERED = 'CAKE_ORDERED';

// action is an objection containing type property
// {
//     type:CAKE_ORDERED
// }

// action creator- is a function that returns object

function orderCake(){
    return{
        type:CAKE_ORDERED,
        quantity:1
    }
}

// application state represented by single object

const initialState = {
    numberOfCake:10
}

// reducer that accepts initial state and actions and returns new state
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                numberOfCake:state.numberOfCake-1
            }
        default:
            return state;
        
    }
}


