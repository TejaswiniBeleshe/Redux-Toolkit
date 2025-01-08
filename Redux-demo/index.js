// creating an action
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

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

function restockCake(quant=1){
    return{
        type:CAKE_RESTOCKED,
        payload:quant
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
        case CAKE_RESTOCKED:
            return{
                ...state,
                numberOfCake:state.numberOfCake+action.payload
            }
        default:
            return state;
        
    }
}

// 1
const store = createStore(reducer)

// 2
console.log('initial state',store.getState())
// 4
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))

// 3
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3));

const actions = bindActionCreators({orderCake,restockCake},store.dispatch);
actions.orderCake()
actions.orderCake()

actions.restockCake(4)

unsubscribe()