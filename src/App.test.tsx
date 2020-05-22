import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders innroad text element', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('InnRoad');
  expect(textElement).toBeInTheDocument();
});


test('renders card elements when data is fetched' () => {
  const { } = render(<App />)
  
})
