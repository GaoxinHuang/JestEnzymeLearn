import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

const setup = () => {
  return shallow(<App />);
}

test('future test goes here', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
