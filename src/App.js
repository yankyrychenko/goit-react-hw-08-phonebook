import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView.js' /* webpackChunkName: "login-view" */),
);
const SignUpView = lazy(() =>
  import('./views/SignUpView.js' /* webpackChunkName: "signup-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView.js' /* webpackChunkName: "contacts-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Container>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/signup"
                restricted
                redirectTo="/contacts"
                component={SignUpView}
              />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginView}
              />
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactsView}
              />
            </Container>
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
