import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IPState } from '../interfaces';

const initialState: IPState = {
  ip: '',
  list: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchIpToStore: (state, action) => {
      state.ip = action.payload;
      state.list.push(action.payload);
    },
    updateListStore: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const {
  searchIpToStore,
  updateListStore,
} = searchSlice.actions;
export const selectIp = (state: RootState) => state.search.ip;
export const selectList = (state: RootState) => state.search.list;

export default searchSlice.reducer;
