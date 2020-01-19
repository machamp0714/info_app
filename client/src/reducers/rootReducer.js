import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";
import columnReducer from "./columnReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
  column: columnReducer
});

export default rootReducer;
