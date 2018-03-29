import React from 'react';
import Masthead from './Masthead';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders a masthead', () => {
  const wrapper = shallow(<Masthead />);
  expect(wrapper.find('header.masthead')).toExist();
});
