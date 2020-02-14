import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './component/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import EmployeeList from './component/EmployeeList'
import Logout from './component/Logout'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm}/>
        <Route path="/EmployeeList" component={EmployeeList}/>
        <Route path="/logout" component={Logout}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
