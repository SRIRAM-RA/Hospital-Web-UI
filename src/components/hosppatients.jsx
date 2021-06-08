import React, { Component } from "react";

class Hosppatients extends Component{
    stat={};

    render(){
        return(
            <div className="patients-facts">
                <div className="fun-facts-box">
                    <h5 id="facts">Fun Facts</h5>
                    <h1><b>Over 5,100 patients <br/> trust us</b></h1>
                    <button type="button" id="patient-btn"><b>Make an Appointment</b></button>
                </div>
                <div className="counts">
                    <div className="count-box">
                        <h1 id="head-text"><b>30</b></h1>
                        <h3 ><b>Years of experience</b></h3>
                    </div>
                    <div className="count-box-1">
                        <h1 id="head-text-1"><b>4,500</b></h1>
                        <h3 ><b>Happy patients</b></h3>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Hosppatients;