// ListSearches.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import ListSearches from './ListSearches';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '../../redux/store';

describe('ListSearches', () => {
  const mockStore = configureStore();

  it('renders ListSearches with reversed list from Redux store', () => {
    const mockList = ['Search 1', 'Search 2', 'Search 3'];

    const store = mockStore({
      search: {
        list: mockList,
      },
    } as RootState);

    render(
      <Provider store={store}>
        <ListSearches />
      </Provider>
    );

    mockList.slice().reverse().forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders ListSearches with "history is empty" message when list is empty', () => {
    const mockList: string[] = [];

    const store = mockStore({
      search: {
        list: mockList,
      },
    } as RootState);

    render(
      <Provider store={store}>
        <ListSearches />
      </Provider>
    );

    expect(screen.getByText('history is empty')).toBeInTheDocument();
  });
});
