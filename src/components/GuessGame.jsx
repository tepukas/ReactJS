import { useState } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

function GuessGame() {
    const [secretNumber] = useState(
        () => Math.floor(Math.random() * 100) + 1
    );

    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const number = Number(guess);

        if (number < secretNumber) {
            setMessage("Bandyk didesnį");
        } else if (number > secretNumber) {
            setMessage("Bandyk mažesnį");
        } else {
            setMessage("Teisingai!");
        }
    }

    return (
        <div>
            <p>Atspėkite skaičių nuo 1 iki 100.</p>

            <GuessForm
                guess={guess}
                onGuessChange={setGuess}
                onSubmit={handleSubmit}
            />

            <Message message={message} />
        </div>
    );
}

export default GuessGame;