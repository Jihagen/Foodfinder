
const app={
    title: "Indecision App",
    subtitle: "super unuseful yeah",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value ="";
        renderIndApp();
    };
};

const reset = () => {
    app.options = [];
    renderIndApp();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const renderIndApp = () => {
    const template= (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle&& <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? "Here are your options" : "No options"}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do?</button>
        <button onClick={reset}>Remove All</button>
        <ol>
        {
            app.options.map((option) => {
                return <li key={option}>Option: {option}</li>;
            })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};


renderIndApp();