import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
