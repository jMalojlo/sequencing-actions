import axios from "axios";
import { from } from "rxjs";
import { combineEpics } from "redux-observable";
import { switchMap, map, tap, finalize } from "rxjs/operators";

import * as appActions from "./actions";

const getUsers = action$ =>
  action$.ofType(appActions.GET_USERS_REQUEST).pipe(
    switchMap(action => {
      let possibleUsers = null;
      return from(
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(res => res.data)
      ).pipe(
        tap(users => {
          possibleUsers = users;
        }),
        map(users => appActions.getUsersSuccess(users)),
        finalize(() => {
          if (action.meta.onComplete && possibleUsers) {
            action.meta.onComplete(possibleUsers);
          }
        })
      );
    })
  );

const getPostsForUser = action$ =>
  action$
    .ofType(appActions.GET_POSTS_FOR_USER_REQUEST)
    .pipe(
      switchMap(action =>
        from(
          axios
            .get(
              `https://jsonplaceholder.typicode.com/posts?userId=${
                action.payload.userId
              }`
            )
            .then(res => res.data)
        ).pipe(map(users => appActions.getPostsForUserSuccess(users)))
      )
    );

export default combineEpics(getUsers, getPostsForUser);
