import React, { Component } from "react";

class Hospcontact extends Component{
    state={};

    render(){
        return (
            <div className="contact">
                <div className="services-head" id="contact-head">
                    <h1> Contact</h1>
                    <h1 id="subtext"> &nbsp;Us</h1>
                </div>
                <p id="contact-content">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <div className="contact-contents">
                    <div className="contact-content-box">
                        <i class="fas fa-map-marker-alt" id="contact-icon"></i><br/>
                        <h3 id="contact-head-1"> ADDRESS</h3><br></br>
                        <p> SIHS Colony Rd, Singanallur, Tamil Nadu 641005</p>
                    </div>
                    <div className="contact-content-box">
                        <i class="fas fa-phone-alt" id="contact-icon"></i><br/>
                        <h3 id="contact-head-1"> PHONE</h3><br></br>
                        <a href="/call"><p> +1234 567 890</p></a>
                    </div>
                    <div className="contact-content-box">
                        <i class="fas fa-paper-plane" id="contact-icon"></i><br/>
                        <h3 id="contact-head-1"> E-MAIL</h3><br></br>
                        <a href="/mail"><p> medihosp@gmail.com</p></a>
                    </div>
                    <div className="contact-content-box">
                        <i class="fas fa-globe-americas" id="contact-icon"></i><br/>
                        <h3 id="contact-head-1"> WEBSITE</h3><br></br>
                        <a href="/home"><p> www.meidhosp.com</p></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hospcontact;