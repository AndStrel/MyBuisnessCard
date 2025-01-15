import transitioReducer from './transitionSlice';
import { toggleCompleted } from './transitionSlice';
import { expect, describe } from '@jest/globals';

describe('transitionSlice', () => {
  it('проверка toggleCompleted', () => {
    const initialState = {
      completed: false,
    };
    const action = toggleCompleted(true);
    const state = transitioReducer(initialState, action);
    expect(state.completed).toBe(true);
  });
});
