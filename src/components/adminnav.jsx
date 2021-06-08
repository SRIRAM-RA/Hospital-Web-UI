import React, { Component } from "react";

class Adminnav extends Component{
    state={};

    render(){
        return(
            <div className="topnav" >
                <div className="title">
                    <a href="/home" >MEDIHOSP </a>
                </div>
                <div className="nav-contents" >
                    <a href="#">ADMIN</a>
                    <a href="/home"> VIEW SITE  </a>
                    <a href="/password"> CHANGE PASSWORD </a>
                    <a href="/logout"> LOGOUT</a>
                </div>
            </div>
        )
    }
}

export default Adminnav;