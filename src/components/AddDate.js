import React from "react";
import moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 

export default class Example extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date 
        }
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = date => {
      this.props.handleChange(date)
      this.setState( {
        startDate: date
      },
      () => console.log(this.state.startDate)); 
    }

    handleSubmit(e, prevprops) {
       e.preventDefault();
       let date = this.state.startDate;
       console.log(date) 
   }; 

   
    render() {
      return (
          <div className = "container">
            <form onSubmit = {this.handleSubmit}>
            <div className = "form-group">
            <label>Select Best-before Date: </label>
        <DatePicker
          selected={this.state.startDate}
          date = {this.state.startDate}
          onChange={this.handleChange}
          selectedDate = {this.state.startDate.toLocaleDateString}
          />
          </div>
          <p>{this.state.startDate.toLocaleDateString ()}</p>
         </form>
         </div>
      );
    }
}