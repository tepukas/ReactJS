function GuessForm({
                       guess,
                       onGuessChange,
                       onSubmit,
                       disabled,
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
                disabled={disabled}
            />

            <button
                type="submit"
                disabled={disabled}
            >
                Spėti
            </button>
        </form>
    );
}

export default GuessForm;