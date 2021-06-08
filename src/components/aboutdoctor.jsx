import React, { Component } from "react";

class Aboutdoctor extends Component{
    state={};

    render(){
        return(
            <div className="doc-services">
                <div >
                    <h1> Welcome <subtext id="subtext">Doctor</subtext></h1>
                </div>
                <div className="doc-profile">
                    <div className="doc-details">
                        <img src="/images/health.jpg" id="profile-content"/>
                    </div>
                    <div className="doc-details-1">
                        <h1 id="profile-content">Dr. Emma Brooke</h1>
                        <h2 id="inner-content">Dept of Orthopaedics, </h2>
                        <h2 id="inner-content">Trauma & Spine Surgery.</h2>
                        <h3 id="university"> Mayo Clinic</h3>
                        <br/>
                        <h5> <b>Achievements</b></h5>
                        <p>Gold Medal in Orthopaedics during MD<br/>
                        Best scientific paper award for the year 1999- 2000 from  JIPMER scientific society<br/>
                        Performance Excellence Award for the year 2016,  Mayo Clinic, United States.</p>
                        <button type="button" id="profile-btn"> My Profile</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutdoctor;