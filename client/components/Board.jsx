import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Category from './Category.jsx';
import { addCategoryActionCreator } from '../actions/actions.js';
import { addCardActionCreator } from '../actions/actions.js';
import { addToStateActionCreator } from '../actions/actions.js';

const Board = () => {
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch('/api/category');

        if (!response.ok) {
          throw new Error(`Failed to fetch all categories: ${response.status}`);
        }

        const data = await response.json();

        console.log('data: ', data);

        dispatch(addToStateActionCreator(data));
      } catch (error) {
        console.error('Failed to fetch jobs', error);
      }
    }

    fetchAll();
  }, []);

  const categories = useSelector((state) => state.board.categories);
  console.log('categories in board.jsx: ', categories);

  const categoryData = categories.map((name, index) => {
    return <Category name={name} key={index} />;
  });

  async function submitHandler(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    await fetch('/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1,
        category_name: event.target[0].value,
      }),
    });
    dispatch(addCategoryActionCreator(event.target[0].value));
  }

  return (
    <div>
      <h2>AxolBoard</h2>
      <div className='category-input-container'>
        <div className='left-content'></div>
        <div className='right-content'>
          <form onSubmit={(event) => submitHandler(event)}>
            <input placeholder='Enter Category Name' type='text' />
            <button type='submit'>Add Category</button>
          </form>
        </div>
      </div>
      <div className='board-container'>{categoryData}</div>
    </div>
  );
};
// onClick={updateCardActionCreator} //saved for later, put back in button when read
export default Board;
