import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

jest.mock('node-fetch');

// const apiIpUrl = 'http://worldtimeapi.org/api/ip/';


describe.skip('App Component', () => {
  it('renders App component', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    // const headingElement = screen.getByRole('heading', { name: /List of all searches:/i });
    // expect(headingElement).toBeInTheDocument();
  });

  it('handles user input and triggers search', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    const inputElement = screen.getByLabelText(/text here ip or url/i);
    const searchButton = screen.getByRole('button', { name: /search/i });

    userEvent.type(inputElement, 'example.com');
    userEvent.click(searchButton);

    await waitFor(() => screen.getByText(/Please input proper IP or URL/i));
  });
});
