import React from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './custom-button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

  render() {
    const { children, buttonType, ...otherprops } = this.props;
    const CustomButton = this.getButton(buttonType);
    return <CustomButton {...otherprops}>{children}</CustomButton>;
  }
}

export default CustomButton;
