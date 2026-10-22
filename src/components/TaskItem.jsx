function TaskItem({ task, onComplete, onDelete }) {
    return (
        <li>
      <span
          style={{
              textDecoration: task.completed ? "line-through" : "none",
          }}
      >
        {task.text}
      </span>

            {task.completed && <span> - Atlikta</span>}

            <button
                onClick={() => onComplete(task.id)}
                disabled={task.completed}
            >
                Pažymėti kaip atliktą
            </button>

            <button
                onClick={() => onDelete(task.id)}
            >
                Ištrinti
            </button>
        </li>
    );
}

export default TaskItem;