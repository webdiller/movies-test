import { combineReducers } from "redux";
import {searchUsers} from "./searchUsers";
import {auth} from "./auth";

export default combineReducers({
  searchUsers,
  auth,
});
