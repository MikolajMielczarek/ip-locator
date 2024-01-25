import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from './Search';

const mockStore = configureStore([]);

describe('Search component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = mockStore({
      search: {
        ip: '',
        stackUrl: '',
      },
    });
  });

  it('submits the form', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const realInput = screen.getByLabelText('Text here IP or URL');
    await act(async () => {
      fireEvent.change(realInput, { target: { value: '192.168.0.1' } });
      fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    });

    expect(store.getActions()).toEqual([{ type: 'search/searchIpToStore', payload: '192.168.0.1' }]);
  });

  it('shows validation error for invalid input', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const realInput = screen.getByLabelText('Text here IP or URL');
    
    await act(async () => {
      fireEvent.change(realInput, { target: { value: 'invalid-ip' } });
      fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    });

    expect(screen.getByText('Please input proper IP or URL')).toBeInTheDocument();
    expect(store.getActions()).toEqual([]);
  });
});
