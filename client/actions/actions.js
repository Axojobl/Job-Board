/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import { useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';

export const addToStateActionCreator = (data) => ({
  type: types.ADD_TO_STATE,
  payload: data,
});

// Add Card action creator
export const addCardActionCreator = (cardId) => ({
  type: types.ADD_CARD,
  payload: { cardId },
});

// add more action creators
export const delCardActionCreator = (cardId) => ({
  type: types.DELETE_CARD,
  payload: { cardId },
});

export const updateCardActionCreator = (cardId) => ({
  type: types.UPDATE_CARD,
  payload: { cardId },
});

export const addCategoryActionCreator = (categoryName, _id) => ({
  type: types.ADD_CATEGORY,
  payload: { categoryName, _id},
});

export const deleteCategoryActionCreator = (categoryId) => ({
  type: types.DELETE_CATEGORY,
  payload: { categoryId },
});

export const updateCategoryActionCreator = (categoryId) => ({
  type: types.UPDATE_CATEGORY,
  payload: { categoryId },
});