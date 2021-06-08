import React, { Component } from "react";

class Staffnav extends Component{
    state = {};
    
    render (){
        return (
            <div className="topnav" >
                <div className="title">
                    <a href="/home" >MEDIHOSP</a>
                </div>
                <div className="nav-contents">
                    <a href="/department"> DEPARTMENTS</a>
                    <a href="/contact"> CONTACT</a>
                    <a href="/login"> PROFILE </a>
                    <a href="/logout"> LOGOUT</a>
                </div>
            </div>
          );
    }
}

export default Staffnav;