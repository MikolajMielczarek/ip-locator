/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IPState {
    ip: string,
    stackUrl: string,
    list: string[],
    isLoading: boolean
    error: string
}

const initialState: IPState = {
    ip: '',
    stackUrl: '',
    list: [],
    isLoading: false,
    error: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    isErrorSearch: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.ip = '';
      state.stackUrl = '';
      state.list = [];
    },
    isLoadingSearch: (state) => {
      state.isLoading = true;
      state.error = '';
      state.ip = '';
      state.stackUrl = '';
      state.list = [];
    },
    searchIpToStore: (state, action) => {
      state.ip = action.payload;
      state.stackUrl = `http://api.ipstack.com/${action.payload}?access_key=5905c3b2d497f0329459281ed6ea2978`;
      state.list.push(action.payload);
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const {
  isErrorSearch,
  isLoadingSearch,
  searchIpToStore,
} = searchSlice.actions;
export const selectIp = (state: RootState) => state.search.ip;
export const selectStackUrl = (state: RootState) => state.search.stackUrl;
export const selectList = (state: RootState) => state.search.list;
export const selectIsLoading = (state: RootState) => state.search.isLoading;
export const selectError = (state: RootState) => state.search.error;

export default searchSlice.reducer;
