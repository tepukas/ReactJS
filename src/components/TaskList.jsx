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

    function handleCompleteTask(taskId) {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: true }
                    : task
            )
        );
    }

    return (
        <div>
            <TaskForm onAdd={handleAddTask} />

            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onComplete={handleCompleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;