import { combineReducers } from 'redux';

import { appReducer } from '~src/features/app';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
