import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "typeface-roboto";
import { Provider } from "react-redux";
import {
  createStore,
  combineReducers,
  compose,
  Store,
  applyMiddleware
} from "redux";
import { reducers } from "./reducers";
// tslint:disable-next-line:import-name
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";

interface IState {
  state: "";
  reducers: {};
}

// ignore this
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// move to a store init file later
const store: Store<IState> = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunkMiddleware as ThunkMiddleware<IState>))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
