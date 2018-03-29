import React from 'react';
import AboutList from './AboutList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders an unordered list of items with each about', () => {
  const wrapper = shallow(<AboutList abouts={[ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]} />);
  expect(wrapper.find('ul')).toExist();
  expect(wrapper.find('ul li').length).toEqual(2);
  expect(wrapper.find('ul li').at(0).text()).toEqual('foo');
  expect(wrapper.find('ul li').at(1).text()).toEqual('bar');
});
