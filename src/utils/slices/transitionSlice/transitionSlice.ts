import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface transitionState {
  completed: boolean;
}

const initialState: transitionState = {
  completed: false,
};

const transitionSlice = createSlice({
  name: 'transition',
  initialState,
  reducers: {
    toggleCompleted: (state, action: PayloadAction<boolean>) => {
      state.completed = action.payload;
    },
  },
});

export const { toggleCompleted } = transitionSlice.actions;
export default transitionSlice.reducer;
