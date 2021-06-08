import React, { Component } from "react";

class Login extends Component{

    constructor () {
        super()
        this.state={portal:""};
        this.portalUpdate=this.portalUpdate.bind(this);
    }

    portalUpdate(e){
        this.setState({portal:e.target.value})
    }


    render(){
        return (
            <div className="login-form-box">
                <form action="">
                    <h1 id="login-head"> LOGIN </h1>
                    <label id="label">PORTALS</label><br/>
                    <div className="radial-btns">
                        <input type="radio"  onClick={this.portalUpdate} id="admin" value="admin" name="portal" className="radial-buttons"/> <label for="admin" id="radio-label">ADMIN</label> <br/>
                    </div>
                    <div className="radial-btns">
                        <input type="radio"  onClick={this.portalUpdate} id="doctor" value="doctor" name="portal" className="radial-buttons"/> <label for="doctor" id="radio-label">DOCTOR</label><br/>
                    </div>
                    <div className="radial-btns">
                        <input type="radio"  onClick={this.portalUpdate} id="staff" value="staff" name="portal" className="radial-buttons"/> <label for="staff" id="radio-label">STAFF</label><br/>                        
                    </div>
                    <label id="label">USERNAME</label>
                    <input type="email" placeholder="example@gmail.com" id="input" ></input>
                    <label id="label">PASSWORD</label>
                    <input type="password" placeholder="********" id="input" required/>
                    <label className="remember">
                        <input type="checkbox" name="remember" id="checkbox"/> &nbsp;REMEMBER&nbsp;ME
                    </label><br></br>
                    <button type="button" id="submit" onClick = {()=>{this.props.signin(this.state.portal)}} >SIGN IN</button>
                    <label className="forgot"><a href="/forgotpassword"> FORGOT PASSWORD ?</a> </label>
                </form>
            </div>
        )
    }
}

export default Login;