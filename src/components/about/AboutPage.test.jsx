import React from 'react';
import { AboutPage } from './AboutPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders an about list and calls loadAboutsAsync on mount', () => {
  const loadFn = jest.fn();
  const wrapper = shallow(<AboutPage abouts={[ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]} actions={{ loadAboutsAsync: loadFn }} />);
  expect(loadFn).toHaveBeenCalled();
  expect(wrapper.find('AboutList')).toExist();
  expect(wrapper.find('AboutList').prop('abouts')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});
