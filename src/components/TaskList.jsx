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

    function handleDeleteTask(taskId) {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        );
    }

    return (
        <div>
            <TaskForm onAdd={handleAddTask} />

            {tasks.length === 0 ? (
                <p>Užduočių dar nėra.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onComplete={handleCompleteTask}
                            onDelete={handleDeleteTask}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;