import React from 'react';
import ContactList from './ContactList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders set of ContactItems in a ul', () => {
  const wrapper = shallow(<ContactList contacts={[ { id: 0 }, { id: 1 } ]} />);
  expect(wrapper.find('ul')).toExist();
  expect(wrapper.find('ul ContactItem').length).toEqual(2);
  expect(wrapper.find('ul ContactItem').at(0).prop('contact')).toEqual({ id: 0 });
  expect(wrapper.find('ul ContactItem').at(1).prop('contact')).toEqual({ id: 1 });
});
