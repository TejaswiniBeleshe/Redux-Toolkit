const redux = require('redux');
const produce = require('immer').produce
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street)=>{
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

const initialState = {
    name:'Tejaswini Belashe',
    address:{
        street:'Datt Galli',
        city:'Nipani',
        state:'KA'
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'STREET_UPDATED':
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        default:{
            return state

        }
            
    }
}

const store = createStore(reducer,applyMiddleware(logger));
console.log('initial state', store.getState())

// const unsubscribe = store.subscribe(()=>console.log(store.getState()))
const unsubscribe = store.subscribe(()=>{})


store.dispatch(updateStreet('Balaksrishma nimbalkar colony'))

unsubscribe()