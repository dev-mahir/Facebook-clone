import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Tooltip = ({ msg, right, left, bottom, top, angle, width }) => {
    
    const tooltipBox = useRef();

    useEffect(() => {
        tooltipBox.current.parentElement.style.position = "relative"
    })

    return (
        <div style={{ top: top, left: left, right: right, bottom: bottom }} className="tooltip-box" ref={tooltipBox} >

            <div className={ angle ? "tooltip " + angle : "tooltip"}  >
                <p style={{maxWidth:width}}>{msg}</p>
            </div>

        </div>
    );
};

export default Tooltip;
