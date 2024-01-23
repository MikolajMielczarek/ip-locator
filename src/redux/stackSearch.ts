/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SearchInformation {
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
    searchInformation: SearchInformation
    isLoading: boolean
    error: string
}

const searchInformationInitial = {
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
  searchInformation: searchInformationInitial,
  isLoading: false,
  error: '',
};

export const stackSearchSlice = createSlice({
  name: 'stackSearch',
  initialState,
  reducers: {
    isErrorStack: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.searchInformation = searchInformationInitial;
    },
    isLoadingStack: (state) => {
      state.isLoading = true;
      state.error = '';
      state.searchInformation = searchInformationInitial;
    },
    stackToStore: (state, action) => {
      state.searchInformation = action.payload;
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const {
  isErrorStack,
  isLoadingStack,
  stackToStore,
} = stackSearchSlice.actions;
export const selectStack = (state: RootState) => state.stackSearch.searchInformation;
export const selectIsLoading = (state: RootState) => state.stackSearch.isLoading;
export const selectError = (state: RootState) => state.stackSearch.error;

export default stackSearchSlice.reducer;
