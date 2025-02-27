//JSX Javascript XML

//C:\Users\Julia\Documents\Documents\WWU\Techlabs\React Course Projects\Indecision App> 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" –watch

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options: props.options
        }
    }
    componentDidMount() {
        try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) {
            this.setState(()=> ({options}));
        } 
        } catch (e){
            //DO NOTHING
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    handleDeleteOptions(){  
          this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>optionToRemove !== option)
        }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }

    render() {
    const subtitle = "Manage whatever is in your fridge";
    
       return(
           <div>
           <Header subtitle = {subtitle}/>
           <Action 
           hasOption={this.state.options.length >0}
           handlePick={this.handlePick}
           />
           <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
           <AddOptions 
                handleAddOption = {this.handleAddOption}
           />
           </div>
       )
   } 
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps ={
    title: "Foodfinder"
};


const Action = (props) => {
    return (
        <div>
        <button 
        onClick = {props.handlePick}
        disabled={!props.hasOption}
        >
        What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
        <button onClick = {props.handleDeleteOptions}>Remove All</button>
        {props.options.length ===0 && <p>Please add an item you bought to get started!</p>}
        {
            props.options.map((option) => (
            <Option 
            key = {option} 
            optionText = {option}
            handleDeleteOption = {props.handleDeleteOption}
            />
            ))
        }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button onClick = {(e) => {
            props.handleDeleteOption(props.optionText);
        }}    
        >
        Remove 
        </button>
        </div>
    );
}

class AddOptions extends React.Component{
    constructor (props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined 
        };
    }
   handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));

        if (!error) {
          e.target.elements.option.value = "";
        }
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>
            </div>
        );
    };
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));