import {useState} from "react";
import Task from "./Task";


function TasksList() {
    const [tasksItemsList, setTaskItemsList] = useState([
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS Siklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook.",
        "Follow Zuitt Coding Bootcamp on Instagram.",
        "Follow Edukasyon.ph on Instagram.",
    ]);
    const [taskValue, setTaskValue] = useState("");
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    };
    const addTaskHandler = () => {
        setTaskItemsList([taskValue, ...tasksItemsList]);
        setTaskValue("");
            // e.target.value = "";
    };
    // const addTaskHandler = (e) => {
    //     if (e.keyCode == 13) {
    //         setTaskItemsList([taskValue, ...tasksItemsList]);
    //         setTaskValue("");
    //         // e.target.value = "";
    //     }
    // };

    return (
        <>
            <input 
                className="task-input" 
                placeholder="Create a new task"
                onChange={inputChangeHandler}
                onBlur={addTaskHandler}
                value={taskValue}
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