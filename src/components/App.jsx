import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.asyncCallsInProgress > 0
  };
}

export const ConnectedApp = connect(mapStateToProps)(App);
export default withRouter(ConnectedApp);
