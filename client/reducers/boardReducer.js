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

const initialState = {
  // cateJob: {category: 'placeholder', jobs: []},
  categories: [],
};

const boardReducer = (state = initialState, action) => {
  // let board;

  switch (action.type) {
    /**
     * 
     * Initial page load in Board component that renders all categories and includes them in state
     * Receives payload iterable (array?) of items
     * Adds every item (consisting of ID/category name) to a set
     * Only includes category_name and _id, renaming properties
     * Creates a new shallow copy array from that set
     * Replaces the categories state value with the new array
     * 
     */
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

    /**
     * Adds a new card to state after interacting with the 'add category' form in Board component 
     * Does not handle SQL query, instead allows React component to fetch
     */

    case types.ADD_CATEGORY:
      
      const { categoryName, _id } = action.payload; // RETURN from SQL query to populate
      // console.log('In ADD_CATEGORY: name, id ', categoryName, _id);
      return {
        ...state,
        categories: [...state.categories, { category_name: categoryName, _id }],
      };
      break;
    
    /**
     * Deletes a category from state
     * 
     */
    
    case types.DELETE_CATEGORY:
      
      categories = 'PLACEHOLDER'; // RETURN from SQL query to populate

      return {
        ...state,
        board: categories,
      };
      break;

    /**
     * 
     * Updates a particular category in state
     * 
     */

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
