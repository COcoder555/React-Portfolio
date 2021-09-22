import React from "react";
import './style.css';

const stylesheet = (props)=>{
    let className = props.primary ? 'primary' : ''
    return(
        <div>
        
       <h1 className ='primary' >stylesheets</h1>
        </div>
    )
}

export default stylesheet;