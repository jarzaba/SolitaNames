import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NameList from './NameList';
import { BrowserRouter } from 'react-router-dom';

const names = [
  { name: 'Aku', amount: 1 },
  {
    name: 'Kalle',
    amount: 11,
  },
  { name: 'Liisa', amount: 22 },
];

describe('<NameList />', () => {
  test('renders names', () => {
    const component = render(
      <BrowserRouter>
        <NameList namesFromDB={names} />
      </BrowserRouter>
    );
    // ???

    expect(component.container).toHaveTextContent('Liisa');
  });
});
