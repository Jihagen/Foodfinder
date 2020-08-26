import React from "react";
import Example from "./AddDate";


export default class AddOptions extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
          error: undefined,
          dates: [],
      }
  this.handleChange =this.handleChange.bind(this)
  this.handleAddDate = this.handleAddDate.bind(this)
  }

  callbackFunction = (childDate) => {
    this.setState({selectedDate: childDate})
  }

  sendData = () => {
    this.props.parentCallback(this.state.selectedDate);
  }

    handleAddOption = (e, prevprops) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));

        if (!error) {
          e.target.elements.option.value = ""
          console.log(this.state.selectedDate)
        } 
        
        this.sendData ()
        this.handleAddDate ()
        console.log(this.state.dates)
    }

    handleChange = selectedDate => {
      this.setState( {
        startDate: selectedDate
      },
      () => console.log(this.state.startDate)); 
    }

    handleAddDate = (selectedDate, prevprops) => {
      if(!selectedDate){
          return "Enter Best before date to add item";
      }
      this.setState((prevState)=> ({dates: prevState.dates.concat(selectedDate)}));
      console.log(this.state.dates)
  };



          
    render() {
        return(
            <div>
            {this.state.error && <p className ="addOption-error">{this.state.error}</p>}
            <form className = "addOption" onSubmit={this.handleAddOption}>
            <input className = "addOption__input" type="text" name="option" />
            <button className="button">Add Option</button>
            <Example
            selected = {this.state.startDate}
            date = {this.state.startDate}
            handleChange = {this.handleChange}
            handleAddDate = {this.handleAddDate}
            parentCallback = {this.callbackFunction}
            />
            </form>
            </div> 
        );
    };
  }

    

    

    