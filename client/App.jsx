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
        <div class="title-container">
          
          <h1 className="head-title">Axojobl - Navigate Your Career Waters</h1>
        </div>
      </header>
      <div className="app-container">
        <Board />
      </div>
    </div>
  );
};

export default App;
