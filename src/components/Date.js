import React from "react";

const Dates = (props) => (
    <div>
 <p> {props.date.toLocaleDateString()}</p>
 {
    props.dates.map((date, index) => (
    <Option 
    datekey = {date} 
    dateText = {date.toLocaleDateString()}
    datecount = {index +1}
    onChange = {props.handleChange}
    />
    ))
 }
 </div>
 
)

 export default Dates