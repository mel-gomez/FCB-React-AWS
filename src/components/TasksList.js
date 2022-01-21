import Task from "./Task";

function TasksList() {
    const tasksItemsList = [
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS Siklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook.",
        "Follow Zuitt Coding Bootcamp on Instagram.",
        "Follow Edukasyon.ph on Instagram.",
    ];

    return (
        <>
            <input className="task-input" />
            <ul>
                {tasksItemsList.map((task, index) => {
                    console.log(task);
                    return <Task key={index} taskName={task} />
                })}
            </ul>
        </>
    );
}

export default TasksList;