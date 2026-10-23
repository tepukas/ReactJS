function TaskItem({ task, onComplete, onDelete }) {
    return (
        <li>
      <span className={task.completed ? "completed-task" : ""}>
        {task.text}
      </span>

            {task.completed && <span> - Atlikta</span>}

            <button
                onClick={() => onComplete(task.id)}
                disabled={task.completed}
            >
                Pažymėti kaip atliktą
            </button>

            <button onClick={() => onDelete(task.id)}>
                Ištrinti
            </button>
        </li>
    );
}

export default TaskItem;