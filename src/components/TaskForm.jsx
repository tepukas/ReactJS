import { useState } from "react";

function TaskForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        onAdd(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Įveskite užduotį"
            />

            <button type="submit">
                Pridėti užduotį
            </button>
        </form>
    );
}

export default TaskForm;