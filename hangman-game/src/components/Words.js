export default function Words({ word = '', guessLimit, guesses = [''], wordLength, setWordLength }) {

    const handleChangeWordLength = (e) => {
        setWordLength(e.target.valueAsNumber)
    }
    return (
        <div className="words_container">
            <label>
                <label htmlFor="wordLengthPicker">Pick the word length:</label>
                <input type='number' id="wordLengthPicker" min={3} max={15} value={wordLength || 3} onChange={handleChangeWordLength} />
            </label>
            <p>
                {word?.split('').map((letter, index) => (
                    <span key={index}>{guesses.includes(letter) || guessLimit === 0 ? letter + ' ' : '__ '}</span>
                ))}
            </p>

        </div>
    )
}