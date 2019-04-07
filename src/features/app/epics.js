import { combineEpics } from "redux-observable";
import { tap, ignoreElements } from "rxjs/operators";

import * as appActions from "./actions";

const fakeEpic = action$ =>
  action$.ofType(appActions.APP_INIT).pipe(
    tap(() => console.log("hello")),
    ignoreElements()
  );

export default combineEpics(fakeEpic);
