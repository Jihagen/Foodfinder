import React from "react";
import Example from "./AddDate";


export default class AddOptions extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
        date: new Date,
        error: undefined,
    };
    }

    handleAddOption = (e, prevprops) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));

        if (!error) {
          e.target.elements.option.value = ""
          console.log(this.state.startDate)
        }
        
        () => {
          e.preventDefault();
          console.log(date)
        }
    }

    handleChange = date => {
      this.setState( {
        startDate: date
      },
      () => console.log(this.state.startDate)); 
    }


    

 /*  () => handleSubmit =
 
 handleSubmit(e, prevprops) {
       e.preventDefault();
       let date = this.state.startDate;
       console.log(date)
   };  */
          
    render() {
        return(
            <div>
            {this.state.error && <p className ="addOption-error">{this.state.error}</p>}
            <form className = "addOption" onSubmit={this.handleAddOption}>
            <input className = "addOption__input" type="text" name="option" />
            <button className="button">Add Option</button>
            <Example
            selected = {this.state.startDate}
            handleChange = {this.handleChange}
            handleAddDate = {this.handleAddDate}
            />
            </form>

            </div>
            
        );
    };
  }

    

    

    