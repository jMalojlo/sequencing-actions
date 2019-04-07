import { combineEpics } from 'redux-observable';

import { appEpics } from '~src/features/app';

export default combineEpics(appEpics);
