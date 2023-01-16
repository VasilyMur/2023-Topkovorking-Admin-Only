import { Action, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createRootReducer } from './rootReducer';

  
  // Configure store.
export const store = configureStore({
  reducer: createRootReducer(),
  middleware: [thunk]
});
  
  export type RootState = ReturnType<typeof store.getState>;

  export interface AppThunkAction<TAction extends Action<any> = any> {
    (dispatch: Dispatch<TAction>, getState: () => RootState): void;
}
