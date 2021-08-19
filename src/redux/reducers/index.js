import { combineReducers } from "redux";
import loginReducer from "redux/login/loginReducer"
import profilesReducer from "redux/profiles/profilesReducer"

export default combineReducers({
  auth: loginReducer,
  users: profilesReducer,
});