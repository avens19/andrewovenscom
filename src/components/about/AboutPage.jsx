import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as aboutActions from '../../actions/aboutActions';
import AboutList from './AboutList';

export class AboutPage extends Component {
  componentWillMount() {
    this.props.actions.loadAboutsAsync();
  }

  render() {
    return (
      <AboutList abouts={this.props.abouts} />
    );
  }
}

AboutPage.propTypes = {
  abouts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    abouts: state.abouts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(aboutActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);