import React from 'react';
import { App } from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders a container with the navbar and children inside', () => {
  const wrapper = shallow(<App children={[ <div key="moo" className="moo"></div> ]} loading={false} />);
  expect(wrapper.find('div.container-fluid')).toExist();
  expect(wrapper.find('div.container-fluid > NavBar')).toExist();
  expect(wrapper.find('div.container-fluid > NavBar').prop('loading')).toEqual(false);
  expect(wrapper.find('div.container-fluid > div.moo')).toExist();
});
