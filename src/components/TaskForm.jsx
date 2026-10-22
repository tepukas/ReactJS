import { useState } from "react";

function TaskForm({ onAdd }) {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedText = text.trim();

        if (trimmedText === "") {
            setError("Įveskite užduoties tekstą.");
            return;
        }

        onAdd(trimmedText);

        setText("");
        setError("");
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

            {error && <p>{error}</p>}
        </form>
    );
}

export default TaskForm;