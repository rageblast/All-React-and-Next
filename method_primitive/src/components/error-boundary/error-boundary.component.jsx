import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-bounday.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Catching the error of the child component that's wrapped around ErrorBoundary class
    // updating the state
    return { hasErrored: true };
  }

  // this will gives use the error and which component throughs that error in the info
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
