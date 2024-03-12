/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import App from './sampleDnd/App.jsx'; // Sample DND App
import App from './App.jsx'
import store from './store';
import './styles.scss';

// TODO: MongoDB to Authenticate Users
// TODO: MongoDB for User Sign up
// TODO: Store Redux State into persistent states MongoDB Session -- along with cookies - for card order persistence
// TODO: Look into DNDKit for Drag and Drop options: https://docs.dndkit.com/

const root = createRoot(document.getElementById('contents'));
root.render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <div className='App'>
      <App />
    </div>
  </Provider>
);

export default App;
