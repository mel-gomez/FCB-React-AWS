import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
    const paraStyle = {
        "marginBottom": "15px"
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={paraStyle}>The most simple and amazing todo-list React app.</p>
                <TasksList />
            </header>
        </div>
    );
}
function Task(props) {
    return (
        <li className="tasks-item">{props.taskName}</li>
    );
}
function TasksList() {
    const tasksItemsList = [
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS Siklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook.",
        "Follow Zuitt Coding Bootcamp on Instagram.",
        "Follow Edukasyon.ph on Instagram.",
    ];

            //{tasksItemsList.map(task => (<Task taskName={task} />))}
    return (
        <ul>
            {tasksItemsList.map((task, index) => {
                console.log(task);
                return <Task key={index} taskName={task} />
            })}
        </ul>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
