import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Profile from './components/Profile'
import BestBooks from './BestBooks'
import Login from './Login'
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          {/* Authenticated= {isAuthenticated} */}
          <Header />
          <Switch>
            <Route exact path="/">

              {/* <BestBooks/> */}
              {isAuthenticated ? <BestBooks /> : <Login />}

            </Route>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/profile">

            {/* <Profile /> */}
            {isAuthenticated ?  <Profile /> : "not found "}

            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
