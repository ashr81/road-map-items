import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import axiosMock from 'axios';
import bucketsDataJson from './.data/initial-buckets.json';

jest.mock('axios');

test('renders innroad text element', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('InnRoad');
  expect(textElement).toBeInTheDocument();
});


test('renders card elements when data is fetched', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: bucketsDataJson,
  })
  const { getAllByText } = render(<App />)
  const titleText = await waitForElement(() => getAllByText('Title 1'))
  expect(titleText).toBeDefined()
  const headerText = await waitForElement(() => getAllByText('Trip Entertainment'))
  expect(headerText).toBeDefined()
  const descriptionText = await waitForElement(() => getAllByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a'))
  expect(descriptionText).toBeDefined()
})
