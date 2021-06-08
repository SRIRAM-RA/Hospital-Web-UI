import React, { Component } from "react";

class Staffwelcome extends Component{
    state={};

    render (){
        return( 
            
            <div className="staff-welcome">
                <h1 id="head"> Welcome</h1>
                <h2 id="head1"> To do what nobody else will do, in a way that</h2>
                <h3 id="head1"> nobody else can, in spite of all we go through; </h3>
                <div id="head2">
                <h5> is to be a <subtext>nurse</subtext></h5>
                </div>
                <button type="button" id="book"> View your Schedule</button>
            </div>
        );
    }
}

export default Staffwelcome; 