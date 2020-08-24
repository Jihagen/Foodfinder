import React from "react";


const Action = (props) => (
        <div>
        <button className = "big-button" 
        onClick = {props.handlePick}
        disabled={!props.hasOption}
        >
        What would you like to eat?</button>
        </div>
    );

export default Action;
