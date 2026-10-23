import { useState } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

function GuessGame() {
    const [secretNumber] = useState(
        () => Math.floor(Math.random() * 100) + 1
    );

    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("");
    const [finished, setFinished] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedGuess = guess.trim();

        if (trimmedGuess === "") {
            setMessage("Įveskite sveiką skaičių nuo 1 iki 100.");
            return;
        }

        const number = Number(trimmedGuess);

        if (
            !Number.isInteger(number) ||
            number < 1 ||
            number > 100
        ) {
            setMessage("Įveskite sveiką skaičių nuo 1 iki 100.");
            return;
        }

        setAttempts(attempts + 1);

        if (number < secretNumber) {
            setMessage("Bandyk didesnį");
        } else if (number > secretNumber) {
            setMessage("Bandyk mažesnį");
        } else {
            setMessage("Teisingai!");
            setFinished(true);
        }
    }

    return (
        <div>
            <p>Atspėkite skaičių nuo 1 iki 100.</p>

            <GuessForm
                guess={guess}
                onGuessChange={setGuess}
                onSubmit={handleSubmit}
                disabled={finished}
            />

            <p>Bandymų skaičius: {attempts}</p>

            <Message message={message} />
        </div>
    );
}

export default GuessGame;