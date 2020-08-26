import React from "react";
import moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dates from "./Date";
 

export default class Example extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date,
            dates: []
        }
    this.handleChange =this.handleChange.bind(this)
    this.handleAddDate =this.handleAddDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    sendData = () => {
      this.props.parentCallback(this.state.startDate.toLocaleDateString());
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

   handleAddDate = (date, prevprops) => {
    if(!date){
        return "Enter Best before date to add item";
    }
    this.setState((prevState)=> ({dates: prevState.dates.concat(date)}));
    () => 
    console.log(this.state.dates)
};

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dates.length !== this.state.dates.length) {
        const jsondate = JSON.stringify(this.state.dates);
        localStorage.setItem("dates", jsondate);
    }
  }

   
    render() {
      return (
          <div className = "container">
            <div onSubmit = {this.handleAddDate}>
            <div className = "form-group">
        <DatePicker
          selected={this.state.startDate}
          date = {this.state.startDate}
          onChange={this.handleChange}
          selectedDate = {this.state.startDate.toLocaleDateString}
          />
          </div>
          <button onClick = {this.sendData}>Select Best before Date:</button>
          <p> {this.state.startDate.toLocaleDateString()}</p>
         </div>
         </div>
      );
    }
}


