const redux = require('redux')
// console.log("Redux demo");

const BUY_CAKE = 'BUY_CAKE'

//Action is an js object with type property

//An action creator returns an action

function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) =>{

  switch(action.type){

    case BUY_CAKE:
      return{
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default: return state
  }

}
//create redux store
//take reducer function as parameter
const store = redux.createStore(reducer)
//return state
console.log('Initial state', store.getState());
//set up listener whenever there is a change in state it'll console the state
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
//dispatch the action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()

// create a store

// declare the initial state and reducer

// define your action and action creator

// subscribe to the store

// dispatch to the action to update the store

// finally unsubscribe to the changes


