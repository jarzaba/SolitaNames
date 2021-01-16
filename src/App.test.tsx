import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('<App />', () => {
  test('renders content', () => {
    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(component.container).toHaveTextContent('Solita');
  });
});
