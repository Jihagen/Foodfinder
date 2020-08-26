import React from "react";
import Dates from "./Date"




const Option = (props) => (

        <div className="option">
        <p className="option__text">{props.count}. {props.optionText} </p>
        <div>
        <p className = "widget__message">Best before: {props.selectedDate}</p>
        </div>
        <button 
        className ="button button--link"
        onClick = {(e) => {
            props.handleDeleteOption(props.optionText, props.selectedDate);
        }}    
        >
        Ate it!
        </button>
        </div>
    );

export default Option;