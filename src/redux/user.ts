/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IPStateUser } from '../interfaces';

// This one is to check an error about monthly usage limit has been reached.
// const accessKeyIpStack = '069c471ff2655a70d7cf3c1d38cfc1d4';
const accessKeyIpStack = process.env.REACT_APP_IPSTACK_API_KEY;

const initialState: IPStateUser = {
  ip: '',
  stackUrl: '',
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isErrorIp: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.stackUrl = '';
      state.ip = '';
    },
    isLoadingIp: (state) => {
      state.isLoading = true;
      state.error = '';
      state.stackUrl = '';
      state.ip = '';
    },
    ipAndStackUrlToStore: (state, action) => {
      state.ip = action.payload;
      state.stackUrl = `http://api.ipstack.com/${action.payload}?access_key=${accessKeyIpStack}`;
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const {
  isErrorIp,
  isLoadingIp,
  ipAndStackUrlToStore,
} = userSlice.actions;
export const selectIp = (state: RootState) => state.user.ip;
export const selectStackUrl = (state: RootState) => state.user.stackUrl;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
