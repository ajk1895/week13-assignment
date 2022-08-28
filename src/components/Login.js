import React, { Component} from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid m-auto bg-secondary border-bottom border-dark border-3">
                <div className="text-center">
                    <h3>Login</h3>
                </div>
                
                <div className="row">
                    <div className="mb-3 col"/>
                    <div className="mb-3 col-3 ">
                        <label htmlFor="email-input" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="email address"/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="pasword-input" className="form-label">Password</label>
                        <input type="password" className="form-control" id="pasword-input" placeholder="Password"/>
                    </div>
                    <div className="mb-3 col "/>
                </div>
            </div>
        )
    }
}