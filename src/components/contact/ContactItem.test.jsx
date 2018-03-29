import React from 'react';
import ContactItem from './ContactItem';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders a linked icon', () => {
  const wrapper = shallow(<ContactItem contact={{ icon: 'google', link: 'https://google.ca', title: 'Go to Google' }} />);
  expect(wrapper.find('li.contact-item')).toExist();
  expect(wrapper.find('li.contact-item a').prop('href')).toEqual('https://google.ca');
  expect(wrapper.find('li.contact-item a').prop('title')).toEqual('Go to Google');
  expect(wrapper.find('li.contact-item a i').hasClass('fa fa-google')).toEqual(true);
});
