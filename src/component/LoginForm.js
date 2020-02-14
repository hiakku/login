import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/reducer';
import EmployeeList from './EmployeeList';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    localStorage.setItem("token", "jhfghttryruf7t8778ghhvjhghvt87tyghjvb")
  }

  render() {
    let {email, password} = this.state;
    let { isLoginSuccess, loginError} = this.props;
    if (isLoginSuccess) {
      return <Router><Redirect path to="/EmployeeList"/><EmployeeList/></Router>
    }
    return (
      <div>
        <form ref="form" className="container w-50 jumbotron" name="loginForm" onSubmit={this.handleSubmit}>
          <div className="container col-9">
            <h1 className="text-center display-3 mb-5">Login Form:</h1>
            <div className="form-group">
              <label className="font-weight-bold">Username:</label>
              <input type="email" className="form-control col-10" name="email" value={email} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Password:</label>
              <input type="password" className="form-control col-10" name="password" value={password} onChange={this.handleChange} required/>
            </div>
            <button type="submit" className="btn-primary form-group w-50 btn-lg">Login</button>
            { loginError && <Alert variant="danger" className="col-10">{loginError.message}</Alert> }
          </div>
        </form>
      </div>
    )   
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);