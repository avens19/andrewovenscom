import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';

export default (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route path="/skills" component={SkillsPage} />
  </App>
);