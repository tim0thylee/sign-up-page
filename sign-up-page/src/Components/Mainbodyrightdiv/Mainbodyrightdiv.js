import React from "react";
import "./Mainbodyrightdiv.css";

const Mainbodyrightdiv = () => {
    return (
        <div className="main-body-right-div">
            <ul className="navbar-list">
                <li><a href="aboutus"><b>ABOUT US</b></a></li>
                <li><a href="showcase"><b>TRAINERS</b></a></li>
                <li><a href="letters"><b>MOTIVATION</b></a></li>
                <li><a href="conact"><b>CONTACT</b></a></li>
                <li><a href="blog"><b>BLOG</b></a></li>
            </ul>
            <div className="image-div">
                <a href="moreinfo"><div className="dots"></div></a>
                <img className="body-image"src={require("../../images/body.png")} alt="body"/>
                <a href="programlist">
                    <div className="rounded-rectangle"></div>
                    <div className="rounded-rectangle"></div>
                    <div className="rounded-rectangle"></div>
                </a>
            </div>
            <div className="right-body-buttons">
                <button className="button-previous"><b>PREVIOUS</b></button>
                <button className="button-next"><b>NEXT</b></button>
            </div>
        </div>
    )
}

export default Mainbodyrightdiv;