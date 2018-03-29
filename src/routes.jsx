import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/skills" component={SkillsPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </div>
);