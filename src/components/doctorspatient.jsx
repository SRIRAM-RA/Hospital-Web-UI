import React, { Component } from "react";

class Doctorspatient extends Component{
    state={};

    render(){
        return(
            <div className="doc-patients-box">
                <h1> Patients <subtext id="doc-subtext">attended</subtext></h1>
                <div className="patient-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th id="doc-th">PATIENT ID</th>
                                <th id="doc-th">PATIENT NAME</th>
                                <th id="doc-th">STAFF ATTENDED</th>
                                <th id="doc-th">DIAGNOSTICS</th>
                                <th id="doc-th">TREATMENT PLAN</th>
                                <th id="doc-th">DOCTOR ATTENDED (ASST.)</th>
                                <th id="doc-th">RESULT</th>
                                <th id="doc-th"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td>Mary</td>
                                <td>Nr.Emma</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td>Good</td>
                                <td><button type="button" id="doc-view-btn" onClick={this.props.patientDetails}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>2334</td>
                                <td>Anne</td>
                                <td>Nr.Lina</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td>Good</td>
                                <td><button type="button" id="doc-view-btn" onClick={this.props.patientDetails}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>6724</td>
                                <td>Emma</td>
                                <td>Nr.Nina</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td>Good</td>
                                <td><button type="button" id="doc-view-btn" onClick={this.props.patientDetails}>View Details</button></td>
                            </tr>
                            <tr>
                                <td>1578</td>
                                <td>Stewart</td>
                                <td>Nr.Lana</td>
                                <td>Blood test</td>
                                <td>Yearly checkup</td>
                                <td>Dr.John</td>
                                <td>Good</td>
                                <td><button type="button" id="doc-view-btn" onClick={this.props.patientDetails}>View Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Doctorspatient;