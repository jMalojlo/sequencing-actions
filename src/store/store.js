import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import * as services from "~src/services";
import rootEpic from "./root-epic";
import rootReducer from "./root-reducer";
import { composeEnhancers } from "./utils";

export const epicMiddleware = createEpicMiddleware({
  dependencies: services
});

const configureStore = initialState => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  const createdStore = createStore(rootReducer, initialState, enhancer);

  epicMiddleware.run(rootEpic);
  return createdStore;
};

const store = configureStore();

export default store;
