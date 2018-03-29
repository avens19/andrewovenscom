import React from 'react';
import configureStore from 'redux-mock-store';
import ConnectedSkillsPage, { SkillsPage } from './SkillsPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [];
const mockStore = configureStore(middlewares);

it('renders a skills list and calls loadSkillsAsync on mount', () => {
  const loadFn = jest.fn();
  const wrapper = shallow(<SkillsPage skills={[ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]} actions={{ loadSkillsAsync: loadFn }} />);
  expect(loadFn).toHaveBeenCalled();
  expect(wrapper.find('SkillsList')).toExist();
  expect(wrapper.find('SkillsList').prop('skills')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});

it('injects actions and skills from the store', () => {
  const store = mockStore({ skills: [ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ] });
  const wrapper = shallow(<ConnectedSkillsPage store={store} />);
  expect(wrapper.find('SkillsPage').prop('actions')).toHaveProperty('loadSkillsAsync', expect.any(Function));
  expect(wrapper.find('SkillsPage').prop('skills')).toEqual([ { id: 0, value: 'foo' }, { id: 1, value: 'bar' } ]);
});