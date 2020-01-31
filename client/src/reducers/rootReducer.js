import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";
import columnReducer from "./columnReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
  column: columnReducer,
  task: taskReducer
});

export default rootReducer;
