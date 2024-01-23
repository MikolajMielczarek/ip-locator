/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserInformation {
    continent_code: string,
    continent_name: string,
    country_code: string,
    country_name: string,
    city: string,
    zip: string,
    latitude: number,
    longitude: number,
    error: { code: string , info: string},
}

interface StackState {
    userInformation: UserInformation
    isLoading: boolean
    error: string
}

const userInformationInitial = {
    continent_code: '',
    continent_name: '',
    country_code: '',
    country_name: '',
    city: '',
    zip: '',
    latitude: 0,
    longitude: 0,
    error: { code: '' , info: ''},
}

const initialState: StackState = {
  userInformation: userInformationInitial,
  isLoading: false,
  error: '',
};

export const stackUserSlice = createSlice({
  name: 'stackUser',
  initialState,
  reducers: {
    isErrorStack: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.userInformation = userInformationInitial;
    },
    isLoadingStack: (state) => {
      state.isLoading = true;
      state.error = '';
      state.userInformation = userInformationInitial;
    },
    stackToStore: (state, action) => {
      state.userInformation = action.payload;
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const {
  isErrorStack,
  isLoadingStack,
  stackToStore,
} = stackUserSlice.actions;
export const selectStack = (state: RootState) => state.stackUser.userInformation;
export const selectIsLoading = (state: RootState) => state.stackUser.isLoading;
export const selectError = (state: RootState) => state.stackUser.error;

export default stackUserSlice.reducer;
