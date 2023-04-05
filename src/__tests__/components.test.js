import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Quote from '../Components/Quote';
import Home from '../Components/Home';
import Calculator from '../Components/calculator';

describe('Test components', () => {
  test('Snapshot for Home ', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  test('Snapshot for Quote', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });

  test('Snapshot for Calculator', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
