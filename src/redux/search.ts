// This one is to check an error about monthly usage limit has been reached.
// const accessKeyIpStack = '069c471ff2655a70d7cf3c1d38cfc1d4';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IPState } from '../interfaces';

const initialState: IPState = {
  ip: '',
  stackUrl: '',
  list: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchIpToStore: (state, action) => {
      state.ip = action.payload;
      state.stackUrl = `http://api.ipstack.com/${action.payload}?access_key=5905c3b2d497f0329459281ed6ea2978`;
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
export const selectStackUrl = (state: RootState) => state.search.stackUrl;
export const selectList = (state: RootState) => state.search.list;

export default searchSlice.reducer;
