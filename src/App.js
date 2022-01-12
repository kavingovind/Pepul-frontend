import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ForgotPassword from "./views/ForgotPassword";

import Main from "./views/Main";
import AuthService from "./services/auth.service";

function PrivateRoute({ children, ...rest }) {
  let user = AuthService.getCurrentUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/app/profile" />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <PrivateRoute path="/">
            <Route path="/app" component={Main} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/*
background: #1890ff;
background: -webkit-linear-gradient(to bottom right, #1890ff 0%, #57CDFF 100%);
background: -moz-linear-gradient(to bottom right, #1890ff 0%, #57CDFF 100%);
background: linear-gradient(to bottom right, #1890ff 0%, #57CDFF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
*/
