import React from 'react';
import configureStore from 'redux-mock-store';
import { ConnectedApp, App } from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders a container with the navbar and children inside', () => {
  const wrapper = shallow(<App children={[ <div key="moo" className="moo"></div> ]} loading={false} />);
  expect(wrapper.find('div.container-fluid')).toExist();
  expect(wrapper.find('div.container-fluid > NavBar')).toExist();
  expect(wrapper.find('div.container-fluid > NavBar').prop('loading')).toEqual(false);
  expect(wrapper.find('div.container-fluid > div.moo')).toExist();
});

it('converts the asyncCallsInProgress store property to the loading state', () => {
  let store = mockStore({ asyncCallsInProgress: 1 });
  let wrapper = shallow(
    <ConnectedApp store={store}>
      <div></div>
    </ConnectedApp>
  );
  expect(wrapper.find('App').prop('loading')).toEqual(true);

  store = mockStore({ asyncCallsInProgress: 0 });
  wrapper = shallow(
    <ConnectedApp store={store} />
  );
  expect(wrapper.find('App').prop('loading')).toEqual(false);
});