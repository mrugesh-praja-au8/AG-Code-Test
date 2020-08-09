import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/loginAction";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "admin@gmail.com") {
      if (this.state.password === "admin@123") {
        console.log(this.state);
        this.props.loginUser(this.state);
        this.setState({
          email: "",
          password: "",
        });
      } else {
        alert("Password is wrong please connect with manager");
      }
    } else {
      alert("Email Id is wrong please connect with manager");
    }
  };
  render() {
    return this.props.userState !== null ? (
      <Redirect to="/home" />
    ) : (
      <div className="wrapper">
        <div className="login">
          <div className="login__heading">
            Hello, <br /> Welcome to Dashboard
          </div>
          <form className="login__form" onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Mail Id"
              className="login__form--input"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="login__form--input"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input
              type="submit"
              value="Login"
              className="login__form--submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.loginState.user,
});
export default connect(mapStateToProps, { loginUser })(Login);
