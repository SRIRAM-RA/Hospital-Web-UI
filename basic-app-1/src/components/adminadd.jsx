import React, { Component } from "react";

class Adminadd extends Component{
    state={};

    render(){
        return(
            <div className="add-form">
                <form action="">
                    <h1 id="admin-add-head"> Add events </h1>
                    <label id="label">PORTALS</label><br/>
                    <input type="radio" id="doctor" value="doctor" name="portal" className="radial-buttons"/> <label for="doctor" id="radio-label">DOCTOR</label>
                    <input type="radio" id="staff" value="staff" name="portal" className="radial-buttons"/> <label for="staff" id="radio-label">STAFF</label><br/>
                    <label id="label">NAME</label><br/>
                    <input type="text" placeholder="eg.Emma Brooke" id="admin-input"></input>
                    <label id="label">USERNAME</label>
                    <input type="email" placeholder="example@gmail.com" id="admin-input"></input>
                    <label id="label">PASSWORD</label>
                    <input type="password" placeholder="********" id="admin-input"></input><br/>
                    <label id="label">BRANCH</label><br/>
                    <input type="text" placeholder="eg.Dental" id="admin-input"></input><br></br>
                    <label id="label">PHONE</label><br></br>
                    <input type="number" placeholder="+1234 567 890" id="admin-input"></input>
                    <div className="add-buttons">
                        <button type="submit" id="admin-btn-1" onClick = {this.props.clickHandler}>Save and edit</button>
                        <button type="submit" id="admin-btn-1" onClick = {this.props.clickHandler}>Save and add another</button>
                        <button type="submit" id="admin-btn-1" onClick = {this.props.clickHandler}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Adminadd; 