/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import Board from '../client/components/Board.jsx';
// Testing of Draggable and Droppable

// Original Board

const App = () => {

  

  return (
    <div>
      <header>
        <h1 className="head-title">Axojobl - Job Tracker For ECRI 46</h1>
      </header>
      <div className="app-container">
        <Board />
      </div>
    </div>
  );
};

export default App;
