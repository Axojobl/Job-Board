/**
 * ************************************
 *
 * @module  boardReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';
import reducers from '.';

const initialState = {
  // cateJob: {category: 'placeholder', jobs: []},
  categories: [],
};

const boardReducer = (state = initialState, action) => {
  // let board;

  switch (action.type) {
    case types.ADD_TO_STATE:
      const data = action.payload;

      const catSet = new Set([]);
      data.forEach((item) => {
        catSet.add({
          _id: item.category_id,
          category_name: item.category_name,
        });
      });

      const catArray = Array.from(catSet);
      console.log('This is ADD_TO_STATE', catArray);

      return {
        ...state,
        categories: catArray,
      };

      break;
    case types.ADD_CATEGORY:
      //SQL query to add a category and then return the updated list of cateogries
      // console.log('this is state before', state);
      const { categoryName, _id } = action.payload; // RETURN from SQL query to populate
      // console.log('In ADD_CATEGORY: name, id ', categoryName, _id);
      return {
        ...state,
        categories: [...state.categories, { category_name: categoryName, _id }],
      };
      break;
    case types.DELETE_CATEGORY:
      //SQL query to add a category and then return the updated list of cateogries
      categories = 'PLACEHOLDER'; // RETURN from SQL query to populate

      return {
        ...state,
        board: categories,
      };
      break;
    case types.UPDATE_CATEGORY:
      //SQL query to add a category and then return the updated list of cateogries
      categories = 'PLACEHOLDER'; // RETURN from SQL query to populate

      return {
        ...state,
        board: categories,
      };
      break;

    default: {
      return state;
    }
  }
};

export default boardReducer;
