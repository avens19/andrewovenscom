import React from 'react';
import HomePage from './HomePage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders a Masthead', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper.find('Masthead')).toExist();
});
