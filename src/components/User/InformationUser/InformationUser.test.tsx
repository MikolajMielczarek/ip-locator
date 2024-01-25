import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import InformationUser from './InformationUser';
import { StackStateUser } from '../../../interfaces';

describe('InformationUser', () => {
  const mockStore = configureStore();

  it('renders data from redux', () => {
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
        <InformationUser />
      </Provider>
    );

    expect(screen.getByText(`Your IP: ${mockData.userInformation.ip}`)).toBeInTheDocument();
    expect(screen.getByText(`Continent name: ${mockData.userInformation.continent_name}`)).toBeInTheDocument();
  });
});
