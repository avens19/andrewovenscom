import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from '../../actions/contactActions';
import ContactList from './ContactList';

export class ContactPage extends Component {
  componentWillMount() {
    this.props.actions.loadContactsAsync();
  }

  render() {
    return (
      <div id="contact">
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactPage.propTypes = {
  contacts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);