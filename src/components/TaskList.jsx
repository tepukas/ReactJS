import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(text) {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTasks([...tasks, newTask]);
    }

    return (
        <div>
            <TaskForm onAdd={handleAddTask} />

            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;