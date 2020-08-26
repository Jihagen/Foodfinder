import React from "react";
import Option from "./Option";
import Date from "./Date";



const Options = (props) => (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your Fridge</h3>
            <button 
            className ="button button--link"
            onClick = {props.handleDeleteOptions}>
            Remove All
            </button>
            </div>
            {props.options.length ===0 && <p className="widget__message">Please add an item you bought to get started!</p>}
            {
                props.options.map((option, index) => (
                <Option 
                key = {option} 
                optionText = {option}
                count = {index +1}
                handleDeleteOption = {props.handleDeleteOption}
                selectedDate = {props.selectedDate}
                />
                ))
             }
            {/*  {props.dates.map((date, index) =>
             <Option
             datekey = {date}
             dateText = {date}
             datecount = {index +1}
             date = {date}
             />
             )}   */}
        </div>
    );


export default Options;
