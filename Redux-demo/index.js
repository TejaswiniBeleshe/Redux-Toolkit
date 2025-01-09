// creating an action
const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

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

function orderIceCream(qty=1){
    return{
        type:'ICECREAM_ORDERED',
        payload:qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty,
    }
}
// application state represented by single object

const initialState = {
    numberOfCake:10,
    numberOfIceCream:15
}


// reducer that accepts initial state and actions and returns new state
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake:state.numberOfCake-1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numberOfCake:state.numberOfCake+action.payload
            }
        case ICECREAM_ORDERED:
            return{
                 ...state,
                 numberOfIceCream:state.numberOfIceCream-action.payload
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream+action.payload
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

const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch);
actions.orderCake()
actions.restockCake(4)

actions.orderIceCream(2)
actions.restockIceCream(10)

unsubscribe()