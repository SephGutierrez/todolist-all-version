import { combineReducers } from "redux";
import Activities from "./Activities/reducer";
import Query from "../redux/BREAD/reducers"

const RootReducer = combineReducers({
  activities: Activities, query: Query
});

export default RootReducer;

