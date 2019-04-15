import { combineReducers } from "redux";

import * as appActions from "./actions";

const appReducer = combineReducers({
  users: (state = [], action) => {
    switch (action.type) {
      case appActions.getUsersSuccess:
        return action.payload.users;
      default:
        return state;
    }
  },
  posts: (state = [], action) => {
    switch (action.type) {
      case appActions.getPostsForUserSuccess:
        return action.payload.posts;
      default:
        return state;
    }
  }
});

export default appReducer;
