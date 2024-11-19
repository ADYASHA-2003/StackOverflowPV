import React from "react";

const IconButton=({icon, text, onClick})=>{
    <div className="icon-button" onClick={onClick}>
        {icon && <span className="icon">{icon}</span>}
        <span className="text">{text}</span>
    </div>
}

export default IconButton;