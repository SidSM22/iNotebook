import React from "react";

function Alert(props){
    const capitalize=(word)=>{
        if(word === "danger"){
          word = "error"
        }
        const lower=word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);

    }
    return(
        // it tells if props.alert will be true then only alert msg will execute
        <div className="container" style={{height: '60px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            </div>}
        </div>
    )
} 

export default Alert