import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";
import columnReducer from "./columnReducer";
import taskReducer from "./taskReducer";
import stockReducer from "./stockReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  workspace: workspaceReducer,
  column: columnReducer,
  task: taskReducer,
  stock: stockReducer
});

export default rootReducer;
