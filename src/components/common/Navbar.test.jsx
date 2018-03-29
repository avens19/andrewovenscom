import React from 'react';
import NavBar from './NavBar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders the navbar', () => {
  const wrapper = shallow(<NavBar loading={false} />);
  expect(wrapper.find('.navbar')).toExist();
  expect(wrapper.find('.navbar NavLink.navbar-brand').children().text()).toEqual('Andrew Ovens');
  expect(wrapper.find('.navbar NavLink.navbar-brand').prop('to')).toEqual('/');
  expect(wrapper.find('.navbar NavLink.nav-link').length).toEqual(3);
  expect(wrapper.find('.nav-link').at(0).children().text()).toEqual('Skills');
  expect(wrapper.find('.nav-link').at(0).prop('to')).toEqual('/skills');
  expect(wrapper.find('.nav-link').at(1).children().text()).toEqual('About');
  expect(wrapper.find('.nav-link').at(1).prop('to')).toEqual('/about');
  expect(wrapper.find('.nav-link').at(2).children().text()).toEqual('Contact');
  expect(wrapper.find('.nav-link').at(2).prop('to')).toEqual('/contact');
});

it('renders the loading indicator while loading', () => {
  const wrapper = shallow(<NavBar loading={true} />);
  expect(wrapper.find('.navbar')).toExist();
  expect(wrapper.find('.navbar .nav-link i').hasClass('fa fa-refresh')).toEqual(true);
});