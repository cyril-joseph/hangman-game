import { useEffect, useState } from "react";
import { getWord } from "./common/Utils/Functions";
import Images from "./Images";
import Keyboard from "./Keyboard";
import Words from "./Words";


const guessLimitNumber = 10;

export default function HomePage() {
    const [word, setWord] = useState('')
    const [wordLength, setWordLength] = useState(8)
    const [guesses, setGuesses] = useState([])
    const [guessLimit, setGuessLimit] = useState(guessLimitNumber)

    //restarts the game with default values
    function restartGame() {
        const randomWord = getWord(wordLength)
        setWord(randomWord)
        setGuesses([])
        setGuessLimit(guessLimitNumber)
    }

    useEffect(() => {
        const randomWord = getWord(wordLength)
        setWord(randomWord)
        setGuesses([])
        setGuessLimit(guessLimitNumber)
    }, [wordLength])

    return (
        <main className='game_container'>
            {/* The Top part of the game */}
            <section className='game_status_container'>
                <Images guessLimit={guessLimit} />
                <Words guesses={guesses} word={word} guessLimit={guessLimit} setWordLength={setWordLength} wordLength={wordLength} />
            </section>

            {/* The bottom part of teh same for the keyboard */}
            <section className='game_type_interface'>
                <Keyboard guesses={guesses} word={word} setGuesses={setGuesses} setGuessLimit={setGuessLimit} guessLimit={guessLimit} restartGame={restartGame} />
            </section>
        </main>

    )
}