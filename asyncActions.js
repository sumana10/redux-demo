const redux = require('redux');

const createStore = redux.createStore;

//to use middleware
const applyMiddleware = redux.applyMiddleware 

//define async action creator
const thunkMiddleware = require('redux-thunk').default

//request to an api end point
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUEST
= 'FETCH_USERS_REQUEST'

const FETCH_USERS_SUCCESS
= 'FETCH_USERS_SUCCESS'

const FETCH_USERS_FAILURE =
'FETCH_USERS_FAILURE'

const fetchUsersRequest = () =>{
  return{
    type: FETCH_USERS_REQUEST
  }
}
const fetchUsersSuccess = users =>{
  return{
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
const fetchUsersFailure = error =>{
  return{
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const reducer = (state = initialState, action) =>{

  switch(action.type){
    case FETCH_USERS_REQUEST:
      return {
      ...state,
      loading: true
     }
    case FETCH_USERS_SUCCESS:
      return {
      loading: false,
      users: action.payload,
      error: ''
    }
    case FETCH_USERS_FAILURE:
      return {
      loading: true,
      users: [],
      error: action.payload
    }
  }

}
//this is an async action creator which returns an function instead of action by thunkMiddleware
const fetchUsers = () =>{

  return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
      //
      const users = response.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error =>{
      //
      dispatch(fetchUsersFailure(error.message))
    })
  }

}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=>{ console.log(store.getState())})

store.dispatch(fetchUsers())

//make an api call and dispatch an appropriate action 