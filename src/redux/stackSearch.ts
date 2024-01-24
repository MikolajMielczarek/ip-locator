/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

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

const initialState = {
  searchInformation: searchInformationInitial,
};

export const stackSearchSlice = createSlice({
  name: 'stackSearch',
  initialState,
  reducers: {
    stackToStore: (state, action) => {
      state.searchInformation = action.payload;
    },
  },
});

export const {
  stackToStore,
} = stackSearchSlice.actions;
export const selectStack = (state: RootState) => state.stackSearch.searchInformation;

export default stackSearchSlice.reducer;
