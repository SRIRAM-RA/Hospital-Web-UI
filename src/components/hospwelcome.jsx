import React, { Component } from "react";

class Hospwelcome extends Component{
    state={};

    render (){
        return( 
            
            <div className="hosp-welcome">
                <h1 id="head"> We are committed to Your Health</h1>
                <h3 id="head1"> Your Health is Our Priority </h3>
                <div id="head2">
                <i class="fas fa-plus" id="plusico"></i>
                <h5> &nbsp;We are caring..!!</h5>
                </div>
                <button type="button" id="book"> Appointment</button>
            </div>
        );
    }
}

export default Hospwelcome; 