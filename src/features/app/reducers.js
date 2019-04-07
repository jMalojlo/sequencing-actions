import { combineReducers } from "redux";

import * as appActions from "./actions";

const appReducer = combineReducers({
  started: (state = false, action) => {
    switch (action.type) {
      case appActions.APP_INIT:
        return true;
      default:
        return state;
    }
  }
});

export default appReducer;
