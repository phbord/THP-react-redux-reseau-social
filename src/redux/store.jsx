import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "redux/login/loginReducer"

const rootReducer = combineReducers({
  login: loginReducer
})

const composeApi = compose(
  applyMiddleware(thunkMiddleware), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let store = createStore(
  rootReducer,
  composeApi
);

export default store;