import { createStore, combineReducers } from "redux";
import pastasReducer from "redux/pastas/pastasReducer";
import riceReducer from "redux/rice/riceReducer";
import todolistReducer from "redux/todolist/todolistReducer";

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer,
  item: todolistReducer,
})

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;