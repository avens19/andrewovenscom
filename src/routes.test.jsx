import React from 'react';
import routes from './routes';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

Enzyme.configure({ adapter: new Adapter() });

it('renders all of the routes in a div', () => {
  const wrapper = shallow(<div>{routes}</div>);
  expect(wrapper.find('div div')).toExist();
  expect(wrapper.find('div div Route').length).toEqual(4);
  expect(wrapper.find('Route').at(0).prop('exact')).toEqual(true);
  expect(wrapper.find('Route').at(0).prop('path')).toEqual('/');
  expect(wrapper.find('Route').at(0).prop('component')).toEqual(HomePage);
  expect(wrapper.find('Route').at(1).prop('exact')).not.toEqual(true);
  expect(wrapper.find('Route').at(1).prop('path')).toEqual('/skills');
  expect(wrapper.find('Route').at(1).prop('component')).toEqual(SkillsPage);
  expect(wrapper.find('Route').at(2).prop('exact')).not.toEqual(true);
  expect(wrapper.find('Route').at(2).prop('path')).toEqual('/about');
  expect(wrapper.find('Route').at(2).prop('component')).toEqual(AboutPage);
  expect(wrapper.find('Route').at(3).prop('exact')).not.toEqual(true);
  expect(wrapper.find('Route').at(3).prop('path')).toEqual('/contact');
  expect(wrapper.find('Route').at(3).prop('component')).toEqual(ContactPage);
});
