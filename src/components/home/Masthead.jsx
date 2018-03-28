import React from 'react';

export default function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
        <div className="intro-heading text-uppercase">Welcome!</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#portfolio">See My Work</a>
        </div>
      </div>
    </header>
  );
};