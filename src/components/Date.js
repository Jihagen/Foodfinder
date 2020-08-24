import React from "react";


const Date = (props) => (
        <div className="date">
        <p className = "widget__message">Best before: {props.dateText}</p>
        <button 
        className ="button button--link"
        onClick = {(e) => {
            props.handleDeleteDate(props.selectedDate);
        }}    
        >
        Ate it!
        </button>
        </div>
    );

//This is where the Mhd Should appear and needs to be changed!

export default Date;