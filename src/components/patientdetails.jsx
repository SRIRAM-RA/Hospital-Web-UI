import React, { Component } from "react";

class Patientdetails extends Component{
    state={};

    render(){
        return(
            <div className="patient-profile">
                <h3>Patient Profile</h3>
                <div className="patient-box">
                    <div className="profile-box">
                        <h2 id="patient-head"><b>ABOUT PATIENT</b></h2><br/>
                        <h4 id="profile-head"><b>Name</b></h4>
                        <h5 id="patient-content">Harry potter</h5>
                        <br></br>
                        <h4 id="profile-head"><b>Occupation</b></h4>
                        <h5 id="patient-content">Engineer</h5>
                        <br></br>
                        <h4 id="profile-head"><b>E-mail</b></h4>
                        <h5 id="patient-content">harry@hogwarts.com</h5>
                        <br></br>
                        <h4 id="profile-head"><b>Phone</b></h4>
                        <h5 id="patient-content">+1234 567 890</h5>
                        <br></br>
                        <h4 id="profile-head"><b>Address</b></h4>
                        <h5 id="patient-content">Hogwarts, Middle Forest, World</h5>
                    </div>
                    <div className="patient-graphs">
                        <h2 id="patient-head"><b>PATIENT DETAILS</b></h2>
                        <div className="graphs">
                            <div className="graph-content">
                                <img src="/images/graph1.jpg" id="graph"></img>
                                <h5 id="graph-title"> <b>BLOOD PRESSURE</b> </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <button type="button" id="doc-view-btn" onClick={this.props.doctorPage}> Back</button>
            </div>
        )
    }
}

export default Patientdetails;