import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, Store } from "redux";
import { reducers } from "./reducers";

interface InitialState {
  state: "";
  reducers: {};
}

// ignore this shit
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// move to a store init file later
const store: Store<InitialState> = createStore(
  combineReducers(reducers),
  composeEnhancers()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
