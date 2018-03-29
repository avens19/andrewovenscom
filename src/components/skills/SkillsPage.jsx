import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as skillActions from '../../actions/skillActions';
import SkillsList from './SkillsList';

export class SkillsPage extends Component {
  componentWillMount() {
    this.props.actions.loadSkillsAsync();
  }

  render() {
    return (
      <SkillsList skills={this.props.skills} />
    );
  }
}

SkillsPage.propTypes = {
  skills: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    skills: state.skills
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(skillActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);