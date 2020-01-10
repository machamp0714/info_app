import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer
});

export default rootReducer;
