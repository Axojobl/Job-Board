import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCardActionCreator } from '../actions/actions.js';

import Card from './Card.jsx';
const Category = () => {
  return (
    <div class="category">
      <button id="addJob" onClick={addCardActionCreator}>
        Add Job
      </button>
      <Card />
    </div>
  );
};

export default Category;
