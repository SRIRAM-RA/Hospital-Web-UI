import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Login from "./components/login";
import Hospnav from "./components/hospnav";
import Loginnav from "./components/loginnav";
import Adminnav from "./components/adminnav";
import Admincontent from "./components/admincontent";
import Adminadd from "./components/adminadd";
import Hospwelcome from "./components/hospwelcome.jsx";
import Staffnav from "./components/staffnav.jsx";
import Staffwelcome from "./components/staffwelcome.jsx";
import Docnav from "./components/docnav";
import Patientdetails from "./components/patientdetails";
import Doctorwelcome from "./components/doctorwelcome";
import Aboutdoctor from "./components/aboutdoctor";
import Doctorspatient from "./components/doctorspatient";
import Footer from "./components/hospfooter";
import Registerpatient from "./components/registerpatients";
import Hospservice from "./components/hospservice";
import Hosppatients from "./components/hosppatients";
import Hospcontact from "./components/hospcontact";
import "./index.css";
import { Component } from 'react';


class App extends Component{
 constructor(){
   super()
 }
 state={currentState:"",portal:"",addstaff:""};
  clickHandler = () =>{
    console.log("clickHand",this.state);
    this.setState(state=>({currentState:'login',portal:state.portal,addstaff:state.addstaff}))
  }

  signin = (portal) =>{
    console.log(portal);
    this.setState(state=>({currentState:'logged',portal:portal,addstaff:state.addStaff}));
  }

  addStaffs = (addstaff) =>{
    console.log(addstaff);
    this.setState(state=>({currentState:'addstaffs',portal:state.portal, addstaff:addstaff}));
  }

  patientDetails = (patientDetails) => {
    this.setState(state=>({currentState:'patientdetails',portal:state.portal, addstaff:state.addstaff}));
  }

  doctorPage = () =>{
    this.setState(state=>({currentState:'backtodoctor',portal:state.portal, addstaff:state.addstaff}));
  }
  returnComponent = (currentState) =>{
    console.log(this.state)
    switch(currentState) {
      case 'login':
        console.log("login");
        return(
          <div>
            <Loginnav  />
            <Login signin = {this.signin} />
            <Footer/>
          </div>
        )
        
      case 'logged':
        // console.log("logged");
        if(this.state.portal == "admin"){
          return (<div>
            <Adminnav/>
            <Admincontent addStaffs = {this.addStaffs} />
            <Footer/>
            </div>)
        }
        else if(this.state.portal == "doctor"){
          return (<div><Docnav />
            <Doctorwelcome/>
            <Aboutdoctor />
            <Doctorspatient patientDetails= {this.patientDetails} />
            <Hospcontact />
            <Footer/> 
          </div>)
        }
        else if(this.state.portal == "staff"){
          return(
          <div>
            <Staffnav />
            <Staffwelcome />
            <Registerpatient />
            <Hospcontact />
            <Footer/>
          </div>
          )
        }
        return(
          <div>
            <Loginnav/>
            <Login signin = {this.signin}/>
            <Footer/>
          </div>
        )

      case 'addstaffs':
        return(
          <div>
            <Adminnav/>
            <Adminadd clickHandler = {this.clickHandler}/>
            <Footer/>
          </div>
        )
      
      case 'patientdetails':
        return(
          <div>
            <Docnav />
            <Patientdetails doctorPage = {this.doctorPage}/>
            <Footer/>
          </div>
        )
      case 'backtodoctor' :
        return(
          <div>
            <Docnav />
            <Doctorwelcome/>
            <Aboutdoctor />
            <Doctorspatient patientDetails= {this.patientDetails} />
            <Hospcontact />
            <Footer/> 
          </div>
        )
      default :
        return(
          <div>
            <Hospnav clickHandler={this.clickHandler}/>
            <Hospwelcome />
            <Hospservice />
            <Hosppatients />
            <Hospcontact />
            <Footer/>
          </div>
        )
    }
  }
  render(){
    // console.log("app",this.state)
    return(
      <div>
        {this.returnComponent(this.state.currentState)}
      </div>  
    )
    }  
}

export default App;
