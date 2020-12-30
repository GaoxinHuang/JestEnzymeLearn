import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

/**
* Create ReactWrapper for Input component for testing
* @param {object} testValues - Context and props values for this specific test.
* @returns {ReactWrapper} - Wrapper for Input component and providers
*/
const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
}

test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
