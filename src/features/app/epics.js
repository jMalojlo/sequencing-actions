import axios from "axios";
import { from } from "rxjs";
import { combineEpics } from "redux-observable";
import { switchMap, map } from "rxjs/operators";

import * as appActions from "./actions";

function spreadFuncIf(func, ...args) {
  return func ? [func(...args)] : [];
}

const getUsers = action$ =>
  action$
    .ofType(appActions.GET_USERS_REQUEST)
    .pipe(
      switchMap(action =>
        from(axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data)).pipe(
          switchMap(users =>
            from([appActions.getUsersSuccess(users), action.meta.onComplete(users)])
          )
        )
      )
    );

const getPostsForUser = action$ =>
  action$
    .ofType(appActions.GET_POSTS_FOR_USER_REQUEST)
    .pipe(
      switchMap(action =>
        from(
          axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload.userId}`)
            .then(res => res.data)
        ).pipe(map(users => appActions.getPostsForUserSuccess(users)))
      )
    );

export default combineEpics(getUsers, getPostsForUser);
