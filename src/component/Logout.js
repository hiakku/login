import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className="jumbotron container text-center">
                <h1>You have been Logout successfully!!</h1>
                <Link to="/" className="btn btn-info">Click to Login Again!!</Link>
            </div>
        )
    }
}
