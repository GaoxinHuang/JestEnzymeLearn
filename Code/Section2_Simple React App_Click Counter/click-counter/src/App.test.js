import React from 'react';
import App from './App';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error',()=>{});
test('renders increment button',()=>{});
test('renders counter display',()=>{});
test('count starts at 0',()=>{});
test('clicking button incremenets display',()=>{});
