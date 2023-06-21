import React, { lazy, Suspense, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const HomePage = lazy(() => import('./routes/homepage/homepage.component'));
const ShopPage = lazy(() => import('./routes/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./routes/sign-in-and-sign-up/authentication.component')
);
const CheckoutPage = lazy(() => import('./routes/checkout/checkout.component'));

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './store/user/user.selector';
import { checkUserSession } from './store/user/user.action';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route
                path="/signin"
                element={
                  currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
