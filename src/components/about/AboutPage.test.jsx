import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedAboutPage, { AboutPage } from './AboutPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders an about list and calls loadAboutsAsync on mount', () => {
  const loadFn = jest.fn();
  const wrapper = shallow(<AboutPage abouts={[ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]} actions={{ loadAboutsAsync: loadFn }} />);
  expect(loadFn).toHaveBeenCalled();
  expect(wrapper.find('AboutList')).toExist();
  expect(wrapper.find('AboutList').prop('abouts')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});

it('injects actions and abouts from the store', () => {
  const store = mockStore({ abouts: [ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ] });
  const wrapper = shallow(<ConnectedAboutPage store={store} />);
  expect(wrapper.find('AboutPage').prop('actions')).toHaveProperty('loadAboutsAsync', expect.any(Function));
  expect(wrapper.find('AboutPage').prop('abouts')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});