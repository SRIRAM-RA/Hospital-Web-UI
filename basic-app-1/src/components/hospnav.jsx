import React, { Component } from "react";

class Hospnav extends Component{
    // state = {};

    render (){
        // console.log(this.props);
        return (
            <div>
                {/* <div className="topnav">
                    <div className="title">
                        <a href="/home" >MEDIHOSP</a>
                    </div>
                    <div className="nav-contents">
                        <a href="/department"> DEPARTMENT</a>
                        <a href="/doctors"> DOCTORS</a>
                        <a href="/contact"> CONTACT</a>
                        <a href="#" onClick = { this.props.clickHandler}> LOGIN</a>
                    </div>
                </div>
                 */}
                <div className="topnav" >
                    <div className="title">
                        <a href="/home" >MEDIHOSP</a>
                    </div>
                    <div className="nav-contents">
                        <a href="/department"> DEPARTMENT</a>
                        <a href="/doctors"> DOCTORS</a>
                        <a href="/contact"> CONTACT</a>
                        <a href="#" onClick = { this.props.clickHandler}> LOGIN</a>
                        {/* <div  onClick = {this.props.clickHandler}> LOGIN </div> */}
                    </div>
                </div>
            </div>
          );
    }
}

export default Hospnav;