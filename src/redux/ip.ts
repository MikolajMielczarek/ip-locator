/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// interface ipAPI {
//     abbreviation: undefined,
//     client_ip: undefined,
//     datetime: undefined,
//     day_of_week: undefined,
//     day_of_year: undefined,
//     dst: undefined,
//     dst_from: undefined,
//     dst_offset: undefined,
//     dst_until: undefined,
//     raw_offset: undefined,
//     timezone: undefined,
//     unixtime: undefined,
//     utc_datetime: undefined,
//     utc_offset: undefined,
//     week_number: undefined,
// }

interface IPState {
        ip: string,
        stackUrl: string,
        isLoading: boolean
        error: string
    }

// const zeroStateForApiData = {
//     abbreviation: undefined,
//     client_ip: undefined,
//     datetime: undefined,
//     day_of_week: undefined,
//     day_of_year: undefined,
//     dst: undefined,
//     dst_from: undefined,
//     dst_offset: undefined,
//     dst_until: undefined,
//     raw_offset: undefined,
//     timezone: undefined,
//     unixtime: undefined,
//     utc_datetime: undefined,
//     utc_offset: undefined,
//     week_number: undefined,
//     }

const initialState: IPState = {
  ip: '',
  stackUrl: '',
  isLoading: false,
  error: '',
};

export const ipSlice = createSlice({
  name: 'ip',
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
    stackUrlToStore: (state, action) => {
        state.ip;
        state.stackUrl = action.payload;
        state.error = '';
        state.isLoading = false;
      },
    ipToStore: (state, action) => {
      state.ip = action.payload;
      state.stackUrl;
      state.error = '';
      state.isLoading = false;
    },
  },
});

export const {
  isErrorIp,
  isLoadingIp,
  stackUrlToStore,
  ipToStore,
} = ipSlice.actions;
export const selectIp = (state: RootState) => state.ip.ip;
export const selectStackUrl = (state: RootState) => state.ip.stackUrl;
export const selectIsLoading = (state: RootState) => state.ip.isLoading;
export const selectError = (state: RootState) => state.ip.error;


export default ipSlice.reducer;
