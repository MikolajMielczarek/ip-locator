import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MapUser from './MapUser';

import { StackStateUser } from '../../../interfaces';

describe('MapUser', () => {
  const mockStore = configureStore();

  it('renders PigeonMap with location from dataStore', async () => {
    const mockData: StackStateUser = {
      userInformation: {
        ip: '192.168.0.1',
        continent_code: 'TC',
        continent_name: 'Test Continent',
        country_code: 'CT',
        country_name: 'Test Country',
        city: 'Test City',
        zip: '12345',
        latitude: 40.7128,
        longitude: -74.006,
        error: { code: '', info: '' },
      },
      isLoading: false,
      error: '',
    };

    const store = mockStore({ stackUser: mockData });

    render(
      <Provider store={store}>
        <MapUser />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByAltText("")).toBeInTheDocument();
    });
  });

  it('renders ErrorAlert when there is an error in dataStore', async () => {
    const mockData: StackStateUser = {
      userInformation: {
        ip: '',
        continent_code: '',
        continent_name: '',
        country_code: '',
        country_name: '',
        city: '',
        zip: '',
        latitude: 0,
        longitude: 0,
        error: { code: 'ERROR_CODE', info: 'Test error info' },
      },
      isLoading: false,
      error: '',
    };

    const store = mockStore({ stackUser: mockData });

    render(
      <Provider store={store}>
        <MapUser />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test error info')).toBeInTheDocument();
    });
  });
});
