/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import boardReducer from './boardReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  board: boardReducer,
});

// make the combined reducers available for import
export default reducers;
