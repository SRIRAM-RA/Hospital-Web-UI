import React, { Component } from "react";

class Registerpatient extends Component{
    state={};

    render(){
        return (
            <div className="patient-details-box">
                <h1> Patients <subtext>attended</subtext></h1>
                <div className="patient-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>PATIENT ID</th>
                                <th>PATIENT NAME</th>
                                <th>ADDRESS</th>
                                <th>MOBILE NO</th>
                                <th>DIAGNOSTICS</th>
                                <th>TREATMENT PLAN</th>
                                <th>DOCTOR ATTENDED</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td>Mary</td>
                                <td>350 S, Beverly D Suite, Beverly hills, CA-90212-4819,USA </td>
                                <td>+1234 567 890</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td><button type="button" id="view-btn">View Details</button></td>
                            </tr>
                            <tr>
                                <td>2334</td>
                                <td>Anne</td>
                                <td>350 S, Beverly D Suite, Beverly hills, CA-90212-4819,USA </td>
                                <td>+1234 567 890</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td><button type="button" id="view-btn">View Details</button></td>
                            </tr>
                            <tr>
                                <td>6724</td>
                                <td>Emma</td>
                                <td>350 S, Beverly D Suite, Beverly hills, CA-90212-4819,USA </td>
                                <td>+1234 567 890</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td><button type="button" id="view-btn">View Details</button></td>
                            </tr>
                            <tr>
                                <td>1578</td>
                                <td>Stewart</td>
                                <td>350 S, Beverly D Suite, Beverly hills, CA-90212-4819,USA </td>
                                <td>+1234 567 890</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td><button type="button" id="view-btn">View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
                <div className="add-remove-patient">
                    <button type="button" id="view-btn"> Add Patient</button>
                    <button type="button" id="view-btn"> Remove Patient</button>
                </div>
            </div>  
        )
    }
}

export default Registerpatient;