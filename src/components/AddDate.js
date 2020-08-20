import React from "react";
import DateInput from '@progress/kendo-react-dateinputs';


export default class Mhd extends React.Component {
    state = { 
        value: new Date()
     };
     
    
    changeDate = (e) => {
        e.preventDefault();
        const mhd = e.target.elements.option.value.trim();
        const error = this.props.changeDate(mhd);
        this.setState(()=>({error}));

        if (!error) {
         this.setState({ value: e.value });
        }};
        
render() {
    return (
        <div>
            <DateInput
                    value={this.state.value}
                    onChange={this.changeDate}
                />
            <button className="button">Add Best Before Date</button>
        </div>
    );
}}

// e.target.elements.option.value = new Date;
// <form className = "addOption__date" onChange={this.changeDate} value={this.state.value}> </form> 
//           <input className = "addOption__date" type="date" name="option__date" /> 