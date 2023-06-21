import React from 'react';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />
          <ButtonsContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              onClick={googleSignInStart}
            >
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
