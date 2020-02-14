import React, { Component } from 'react'
import data from './data'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
import LoginForm from './LoginForm';

const usersData = data.user;
class EmployeeList extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Router><Redirect path to="/"/><LoginForm /></Router>
        }
        return (
            <div>
                <div className="navbar bg-secondary">
                    <h1 className="float-left text-light">Welcome Hruday</h1>
                    <a href="/logout" className="btn btn-danger float-right">Logout</a>
                </div>
                <h2 className="text-center display-4 mt-3">List of Employees</h2>
            <div className="container">
                <table className= "table-bordered table m-auto container table-hover">
                        <thead className="thead-dark"> 
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersData.map((users, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{users.id}</td>
                                            <td>{users.name}</td>
                                            <td>{users.age}</td>
                                            <td>{users.gender}</td>
                                            <td>{users.email}</td>
                                            <td>{users.phoneNo}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeList
