import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import authReducer from '@slices/authSlice/authSlice';
import transitionReducer from '@slices/transitionSlice/transitionSlice';

export const rootReducer = combineSlices({
  auth: authReducer,
  transition: transitionReducer,
  // Другие слайсы
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = dispatchHook.withTypes<AppDispatch>();
export const useAppSelector = selectorHook.withTypes<RootState>();

export default store;
