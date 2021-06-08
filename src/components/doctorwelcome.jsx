import React, { Component } from "react";


class Doctorwelcome extends Component {
    state={};

    render(){
        return (
            <div className="doctor-welcome">
                <h1 id="doc-welcome">Hello Doctor</h1>
                <h5 id="welcome-text">Medihosp welcomes You,</h5>
                <h2 id="doc-content">...let us congratulate you on the choice of calling which offers a combination of intellectual and moral interests found in no other profession.</h2>
            </div>
        )
    }
}

export default Doctorwelcome;