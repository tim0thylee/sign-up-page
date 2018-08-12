import React from "react";
import Mainbodyleftdiv from "../Mainbodyleftdiv/Mainbodyleftdiv"
import Mainbodyrightdiv from "../Mainbodyrightdiv/Mainbodyrightdiv"
import "./Mainbodydiv.css";

const Mainbodydiv = () => {
    return (
        <div className="main-body-div">
            <Mainbodyleftdiv />
            <Mainbodyrightdiv />
        </div>
    )
}

export default Mainbodydiv;