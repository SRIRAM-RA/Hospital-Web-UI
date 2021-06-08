import React, { Component } from "react";

class Loginnav extends Component{
    state = {};
    
    render (){
        return (
            <div className="topnav">
                <div className="title">
                    <a href="/home" >MEDIHOSP</a>
                </div>
                {/* <div className="nav-contents">
                    <a href="/department"> SIGN UP</a>
                    <a href="/login"> SIGN IN </a>
                </div> */}
            </div>
          );
    }
}

export default Loginnav;