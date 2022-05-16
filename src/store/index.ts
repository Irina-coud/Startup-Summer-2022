import { combineReducers } from '@reduxjs/toolkit';

import reducer from './mainSlice';

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
