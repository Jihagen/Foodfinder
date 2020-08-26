import React from "react";
import AddOptions from "./AddOptions";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";
import Example from "./AddDate";

class IndecisionApp extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            options: [],
            dates: [],
            selectedOption: undefined,
        }
    this.handleChange =this.handleChange.bind(this)
    }
    
    handleDeleteOptions = () => {  
          this.setState(() => ({options: [], dates: []}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)
        }));
    };
 /*   /*  handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        })); 
    }; */

    handleAddOption= (option, prevprops) => {
        if(!option){
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    };


    handleAddDate = (selectedDate, prevprops) => {
        if(!selectedDate){
            return "Enter Best before date to add item";
        }
        this.setState((prevState)=> ({dates: prevState.dates.concat(selectedDate)}));
        // console.log(dates)
    };
  

    handleChange = date => {
        this.setState({
          startDate: date
        });
        () => console.log(this.state.startDate)
      };

    handleOkay = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    componentDidMount() {
        const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => console.log('This is your data', data));

        try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) {
            this.setState(()=> ({options}));
        } 
        } catch (e){
            //nothing needs to be done at this error handler
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.dates.length !== this.state.dates.length) {
            const jsondate = JSON.stringify(this.state.dates);
            localStorage.setItem("dates", jsondate);
        }
    }

    callbackFunction = (childDate) => {
        this.setState({selectedDate: childDate})
      }

    render() {
    const subtitle = "Manage your fridge";
    
       return(
           <div>
           <Header subtitle = {subtitle}/>
           <div className="container">
           <Action 
                hasOption={this.state.options.length >0}
                handlePick={this.handlePick}
           />
           <div className="widget">
           <Options 
                options = {this.state.options}
                dates = {this.state.dates}
                selectedDate = {this.state.selectedDate}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <div>
           <AddOptions 
                handleAddOption = {this.handleAddOption}
                dates = {this.state.dates}
                handleAddDate ={this.handleAddDate}
                parentCallback = {this.callbackFunction}
           />
           </div>
           </div>
           </div>
          {/*  <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleOkay = {this.handleOkay}
           /> */}
           </div>
       )
   } 
};



export default IndecisionApp;