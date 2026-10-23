function GuessForm({
                       guess,
                       onGuessChange,
                       onSubmit,
                   }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={guess}
                onChange={(event) =>
                    onGuessChange(event.target.value)
                }
                placeholder="Įveskite skaičių"
            />

            <button type="submit">
                Spėti
            </button>
        </form>
    );
}

export default GuessForm;