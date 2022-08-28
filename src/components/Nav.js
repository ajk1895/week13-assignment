import React, {Component} from "react";

export default class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mb-3" href="#">React</a>     
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">wow a link</a>
                        <a className="nav-link" href="#">another link, cool</a>                    
                    </div>           
                </div>
            </nav>
        )
    }
}