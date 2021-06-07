import React, { Component } from "react";

class Hospservice extends Component{
    state={};

    render(){
        return (
            <div className="services">
                <div className="services-head">
                    <h1>Our</h1>
                    <h1 id="subtext"> &nbsp;Services</h1>
                </div>
                <div className="content-icons">
                    <div className="content-ico">
                        <i class="fas fa-user-md" id="content-icon"></i><br></br>
                        <h5> OPTHALMOLOGY</h5>
                    </div>
                    <div className="content-ico">
                        <i class="fas fa-stethoscope" id="content-icon"></i><br></br>
                        <h5> NEUROLOGY</h5>
                    </div>
                    <div className="content-ico">
                        <i class="fas fa-user-md" id="content-icon"></i><br></br>
                        <h5> TRAUMATOLOGY</h5>
                    </div>
                    <div className="content-ico">
                        <i class="fas fa-stethoscope" id="content-icon"></i><br></br>
                        <h5> DENTAL CARE</h5>
                    </div>
                    <div className="content-ico">
                        <i class="fas fa-user-md" id="content-icon"></i><br></br>
                        <h5> CARDIOLOGY</h5>
                    </div>
                </div>
                <div className="content">
                    <p>We will always be responsive to the pressing needs of the time. From a community needs point of view, it is through interaction and engagement with the communities we serve that we will be nimble to meet those needs…for it is in giving that we receive.</p>
                </div>
                <div className="service-content">
                    <div className="service-content-box">
                        <div className="dp">
                            <img src="/images/cancer1.jpg" id="img"/>
                        </div>
                        <div className="content-head">
                            <a href="/cancer_care"><h3> CANCER CARE</h3></a>
                        </div>
                        <div className="content-body">
                            <p>Indian Cancer Society is committed in extending holistic knowledge, treatment and rehabilitation through its “Rise Against Cancer” movement. </p>
                        </div>
                    </div>
                    <div className="service-content-box">
                        <div className="dp">
                            <img src="/images/home.jpg" id="img"/>
                        </div>
                        <div className="content-head">
                            <a href="/home_care"><h3> HOME CARE</h3></a>
                        </div>
                        <div className="content-body">
                            <p>Indian Cancer Society is committed in extending holistic knowledge, treatment and rehabilitation through its “Rise Against Cancer” movement. </p>
                        </div>
                    </div>
                    <div className="service-content-box">
                        <div className="dp">
                            <img src="/images/health.jpg" id="img"/>
                        </div>
                        <div className="content-head">
                            <a href="/health_care"><h3> HEALTH CHECK</h3></a>
                        </div>
                        <div className="content-body">
                            <p>Indian Cancer Society is committed in extending holistic knowledge, treatment and rehabilitation through its “Rise Against Cancer” movement. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hospservice