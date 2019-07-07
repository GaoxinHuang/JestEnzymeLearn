import React from 'react';
import App from './App';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
    var wrapper = shallow(<App />); 
    //注: 这个只能保证这个render成功. 但是我们想要 测试 specific 的component
    var appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => { 
    var wrapper = shallow(<App />); 
    var button = wrapper.find("[data-test='increment-button']");
    expect(button.length).toBe(1);
});
test('renders counter display', () => { 
    var wrapper = shallow(<App />); 
    var counterDisplay = wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.length).toBe(1);
});

test('count starts at 0', () => { });
test('clicking button incremenets display', () => { });
