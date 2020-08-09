import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ userState, component: Component, ...rest }) => {
  return userState === null ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};

const mapStateToProps = (state) => ({
  userState: state.loginState.user,
});

export default connect(mapStateToProps)(ProtectedRoute);
