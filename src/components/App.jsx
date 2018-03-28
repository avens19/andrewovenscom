import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './common/NavBar';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.asyncCallsInProgress > 0
  };
}

export default compose(withRouter, connect(mapStateToProps))(App);
