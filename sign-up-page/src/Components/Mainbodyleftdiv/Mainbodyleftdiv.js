import React from "react";
import "./Mainbodyleftdiv.css";

const Mainbodyleftdiv = () => {
    return (
        <div className="main-body-left-div">
            <h1><span className="we-are-heading">We are</span> BodyBP</h1>
            <p className="welcome-paragraph">Welcome Back! Please login 
            <br/>    
            to your account.
            </p>
            <form>
                <label className="input-label"/>
                    <span className="input-span">Email Address</span>
                    <input className="input"type= "email" name="e-mail"/>
                <label/>
                <br/>
                <label className="input-label"/>
                    <span className="input-span">Password</span>
                    <input className="input" type="password" name="password"/>
                <label/>
                <div className="checkbox-div">
                    <label className="checkbox-label">
                        <input className="checkbox-input" type="checkbox"/>Remember Me
                        <span className="checkbox-span"></span>
                    </label>
                    <a className="forgot-password-input" href="forgotpassword.com">Forgot password </a>
                </div>
                <div className="buttons-div">
                    <input className="submit-input button" type="submit" name="login" value="Login"/>
                    <button className="signup-button button">Sign up</button> 
                </div>
            </form>
            <div className="terms-div">
                <p className="words-paragraph">By signing up, you agree to BodyBP's</p>
                <p className="terms-paragraph">
                    <a href="bodybypater"><b>Terms and Conditions</b></a> &amp; 
                    <a href="bodybypater"><b> Privacy Policy</b></a>
                </p>
            </div>
        </div>
    )
}

export default Mainbodyleftdiv;