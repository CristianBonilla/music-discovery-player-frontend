/**
 * @format
 */

import 'react-native';
import { App } from '../src/App';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});
