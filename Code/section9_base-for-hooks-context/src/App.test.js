import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord; //mock 这个 getSecretWord

  // mock reuder 的初始值
  const mockUseReducer = jest.fn()
  .mockReturnValue([
    { secretWord, language: 'en' },
    jest.fn()
  ]);

  React.useReducer = mockUseReducer;

  //use mount, because useEffect not called on 'shallow'
  return mount(<App />);
}

test('future test goes here', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // wrapper.update() doesn't trigger update
    // (issue forked from https://github.com/airbnb/enzyme/issues/2091)
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});