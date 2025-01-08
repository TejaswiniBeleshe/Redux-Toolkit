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