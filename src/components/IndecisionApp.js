import React from "react";
import AddOptions from "./AddOptions";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";
import Mhd from "./AddDate";

class IndecisionApp extends React.Component{
    state = {
        options: [],
        value: new Date(),
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {  
          this.setState(() => ({options: []}));
          //DELETE CALL HERE
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)
            //DELETE CALL HERE
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption= (option) => {
        if(!option){
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
            //instead of return this option already exists, 
            //update call for number of i.e. bananas
            //PUT CALL here!
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    };
    changeDate = (e) => {
        this.setState(() =>({ 
            value: e.value }));
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
            // POST CALL instead of local Storage
        }
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
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
           <AddOptions 
                handleAddOption = {this.handleAddOption}
           />
           <Mhd
                value = {this.state.value}
                changeDate = {this.changeDate}
        
           />
           </div>
           </div>
           <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleOkay = {this.handleOkay}
           />
           </div>
       )
   } 
};



export default IndecisionApp;