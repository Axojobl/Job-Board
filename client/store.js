/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore } from 'redux';
import reducers from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers);

export default store;
