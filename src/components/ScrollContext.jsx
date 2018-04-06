import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SmoothScrollBehavior from '../utils/SmoothScrollBehavior';
import SessionStorage from '../utils/SessionStorage';

const propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const childContextTypes = {
  scrollBehavior: PropTypes.object.isRequired
};

class ScrollContext extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { history } = props;

    this.scrollBehavior = new SmoothScrollBehavior({
      addTransitionHook: history.listen,
      stateStorage: SessionStorage,
      getCurrentLocation: () => this.props.location,
      shouldUpdateScroll: ScrollContext.shouldUpdateScroll
    });

    this.scrollBehavior.updateScroll(null, this.getRouterProps());
  }

  getChildContext() {
    return {
      scrollBehavior: this
    };
  }

  componentDidUpdate(prevProps) {
    const { location, history } = this.props;
    const prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    const prevRouterProps = {
      history: prevProps.history,
      location: prevProps.location
    };

    this.scrollBehavior.updateScroll(prevRouterProps, { history, location });
  }

  componentWillUnmount() {
    this.scrollBehavior.stop();
  }

  getRouterProps() {
    const { history, location } = this.props;
    return { history, location };
  }

  static shouldUpdateScroll(prevRouterProps, routerProps) {
    if (location && location.pathname && location.pathname.length > 1) {
      return location.pathname.substr(1);
    }
    return 'home';
  }

  registerElement = (key, element, shouldUpdateScroll) => {
    this.scrollBehavior.registerElement(
      key, element, shouldUpdateScroll, this.getRouterProps(),
    );
  };

  unregisterElement = (key) => {
    this.scrollBehavior.unregisterElement(key);
  };

  render() {
    return React.Children.only(this.props.children);
  }
}

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;

export default withRouter(ScrollContext);
