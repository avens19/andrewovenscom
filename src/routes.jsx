import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <App>
    <Route exact path="/" component={HomePage} />
    <Route path="/skills" component={SkillsPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </App>
);