/**
 * ************************************
 *
 * @author Evan Griffith
 * @date March 12, 2024
 * @description Tests the boardReducer file
 *
 * ************************************
 */

import subject from '../client/reducers/boardReducer';

describe('Job-Board boardReducer', () => {
  let state; // Default state object

  /**
   * Before every test, reset state to the same defaults as
   */
  beforeEach(() => {
    state = {
      categories: [],
    };
  });

  describe('default state', () => {
    it('should return a default state when given undefined state', () => {
      expect(subject(undefined, { type: undefined, payload: 'Test' })).toEqual(
        state
      );
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original state with no duplication', () => {
      const testAction = { type: 'fakeaction' };
      expect(subject(state, testAction)).toBe(state);
    });
  });

  describe('ADD_TO_STATE', () => {
    // declare an add_to_state action
    const action = {
      type: 'ADD_TO_STATE',
      payload: [
        { category_id: 65, category_name: 'Applied', user_id: 2 },
        { category_id: 66, category_name: 'In Progress', user_id: 2 },
      ],
    };

    it('new state should be equal to passed in payload with category_id and category_name', () => {
      let result = subject(state, action).categories;
      expect(result[0]._id).toEqual(action.payload[0].category_id);
      expect(result[1].category_name).toEqual(action.payload[1].category_name);
    });

    it('new categories state should consist of an array of objects that have only two properties, _id, and category_name', () => {
      let result = subject(state, action).categories;
      expect(Array.isArray(result)).toBe(true);
      expect(
        result.every(
          (obj) =>
            obj.hasOwnProperty('_id') &&
            obj.hasOwnProperty('category_name') &&
            Object.keys(obj).length === 2
        )
      ).toBe(true);
    });
  });

  describe('ADD_CATEGORY', () => {
    // declare an add category action that has categoryName and _id
    const testAdd = {
      type: 'ADD_CATEGORY',
      payload: { categoryName: 'New Category', _id: 65 },
    };

    it('Should add a category', () => {
      expect(subject(state, testAdd).categories[0]).toEqual({
        category_name: 'New Category',
        _id: 65,
      });
    });

    it('Should add a category inclusive of previous categories', () => {
      const testSecond = {
        type: 'ADD_CATEGORY',
        payload: { categoryName: 'Bonus category', _id: 69 },
      };

      let temp = subject(state, testAdd);
      let final = subject(temp, testSecond);
      expect(final.categories.length).toBe(2);
    });

    it('Final category should be equal to the action added', () => {
      const testSecond = {
        type: 'ADD_CATEGORY',
        payload: { categoryName: 'Bonus category', _id: 69 },
      };

      let temp = subject(state, testAdd);
      let final = subject(temp, testSecond);
      expect(final.categories[1]).toEqual({category_name: 'Bonus category', _id: 69});
    });
  });
});
