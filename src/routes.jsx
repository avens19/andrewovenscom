import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <div>
    <Route path="/" component={HomePage} />
    <Route path="/" component={SkillsPage} />
    <Route path="/" component={AboutPage} />
    <Route path="/" component={ContactPage} />
  </div>
);