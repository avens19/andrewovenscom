import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedContactPage, { ContactPage } from './ContactPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders a ContactList', () => {
  const loadFn = jest.fn();
  const wrapper = shallow(<ContactPage contacts={[ 1, 2 ]} actions={{ loadContactsAsync: loadFn }} />);
  expect(loadFn).toHaveBeenCalled();
  expect(wrapper.find('ContactList')).toExist();
  expect(wrapper.find('ContactList').prop('contacts')).toEqual([ 1, 2 ]);
});

it('injects actions and contacts from the store', () => {
  const store = mockStore({ contacts: [ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ] });
  const wrapper = shallow(<ConnectedContactPage store={store} />);
  expect(wrapper.find('ContactPage').prop('actions')).toHaveProperty('loadContactsAsync', expect.any(Function));
  expect(wrapper.find('ContactPage').prop('contacts')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});