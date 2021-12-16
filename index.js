const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
// console.log("Redux demo");

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action is an js object with type property
//state is read only be transformed by action
//An action creator returns an action

function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
function buyIceCream(){
  return {
    type: BUY_ICECREAM,
    info: 'First redux action'
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20
// }
const initialCakeState = {
  numOfCakes: 10
}
const initialIceCreamState = {
  numOfIceCream: 20
}
// const reducer = (state = initialState, action) =>{

//   switch(action.type){

//     case BUY_CAKE:
//       return{
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
//     case BUY_ICECREAM:
//       return{
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1
//       }
//     default: return state
//   }

// }
//pure reducer to transform state by action
const cakeReducer = (state = initialCakeState, action) =>{
  switch(action.type){

    case BUY_CAKE:
      return{
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default: return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) =>{
  switch(action.type){

    case BUY_ICECREAM:
      return{
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
    default: return state
  }
}
//create redux store
//take reducer function as parameter
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
//accepts an object
//holding the application state
const store = createStore(rootReducer)

//return current state
console.log('Initial state', store.getState());
//set up listener whenever there is a change in state it'll console the state
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
//dispatch the action
//dipatch method accept an action creator as it's parameter
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

// create a store

// declare the initial state and reducer

// define your action and action creator

// subscribe to the store

// dispatch to the action to update the store

// finally unsubscribe to the changes


