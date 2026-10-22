function TaskItem({ task, onComplete }) {
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
        </li>
    );
}

export default TaskItem;