import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NameInfo from './NameInfo';
import { BrowserRouter } from 'react-router-dom';

const selectedName = { name: 'Aku', amount: 1 };

describe('<NameInfo />', () => {
  test('renders selected name', () => {
    const component = render(
      <BrowserRouter>
        <NameInfo selectedName={selectedName} />
      </BrowserRouter>
    );

    expect(component.container).toHaveTextContent('Aku');
    expect(component.container).toHaveTextContent('1');
  });
});
