import React, { Component } from "react";
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";





export default class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary">
        <div className="row">
          <Nav/>
          <Login/>              
        </div>
      </div>
    );
  }
}  
    
  

