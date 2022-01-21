import {useState} from "react";
import Task from "./Task";


function TasksList() {
    const tasksItemsList = [
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS Siklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook.",
        "Follow Zuitt Coding Bootcamp on Instagram.",
        "Follow Edukasyon.ph on Instagram.",
    ];
    const [taskValue, setTaskValue] = useState("Just another task");
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <>
            <input 
                className="task-input" 
                placeholder="Create a new task"
                onChange={inputChangeHandler}
            />
            <ul>
                {tasksItemsList.map((task, index) => {
                    return <Task key={index} taskName={task} />
                })}
            </ul>
        </>
    );
}

export default TasksList;