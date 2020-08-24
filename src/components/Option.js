import React from "react";


const Option = (props) => (

        <div className="option">
        <p className="option__text">{props.count}. {props.optionText}  </p>
        <p className = "widget__message">Best before: {props.selected}</p>
        <button 
        className ="button button--link"
        onClick = {(e) => {
            props.handleDeleteOption(props.optionText, props.selected);
        }}    
        >
        Ate it!
        </button>
        </div>
    );

export default Option;