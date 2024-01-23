/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IPState {
    ip: string,
    stackUrl: string,
    isLoading: boolean
    error: string
}

const initialState: IPState = {
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
      state.stackUrl = `http://api.ipstack.com/${action.payload}?access_key=5905c3b2d497f0329459281ed6ea2978`;
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
