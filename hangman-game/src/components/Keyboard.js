import { useState } from 'react'
import data from '../assets/data/keys.json'
import Button from './common/Button'
import Modal from './common/Modal'
import { isCorrectAnswer, isExist } from './common/Utils/Functions'

export default function Keyboard({ word, guesses, guessLimit, setGuesses, setGuessLimit, restartGame }) {

    const [modal, setModal] = useState({ type: '', open: false })
    const { keyboard_keys } = data

    //Handle the key click
    const handleClickKey = (e) => {
        let clickedKey = e.target.value || ''
        clickedKey = clickedKey.toLocaleUpperCase()


        const existingWordsInArray = [...guesses]
        existingWordsInArray.push(clickedKey)


        if (!isExist(word, clickedKey) && guessLimit > 0) {
            setGuessLimit(guessLimit - 1)
        }
        
        if( guessLimit - 1 <= 0){
            console.timeLog('hiii')
            setModal({ type: 'lost', open: true })
        }
        if (isCorrectAnswer(word, existingWordsInArray) && guessLimit > 0) {
            setModal({ type: 'win', open: true })
        }

            setGuesses(existingWordsInArray)
    }

    //handle the button Help and Restart 
    const handleSettingsKey = (e) => {
        let clickedKey = e.target.value || ''

        switch (clickedKey) {
            case 'Help': {
                if (modal.open) {
                    setModal({type:'',open:false})
                } else {
                    setModal({ type: 'help', open: true })
                }
                return;
            }
            case 'Restart': {
                setModal({ type: '', open: false })
                restartGame()
                return;
            }
            default: return
        }
    }

    return (
        <div className='v-keyboard'>
            {modal.open && <Modal type={modal.type} setModal={setModal} />}
            {keyboard_keys?.map(({ letter, id, title }) => {
                if (letter === 'Help' || letter === 'Restart') {
                    return <Button
                        type="button"
                        text={letter}
                        key={id}
                        title={title}
                        value={letter}
                        className={`${letter.toLocaleLowerCase()}-btn`}
                        onClick={handleSettingsKey}
                    />
                }
                else {
                    return <Button
                        type="button"
                        text={letter}
                        key={id}
                        value={letter}
                        title={letter}
                        className='alphabet-btn'
                        disabled={guesses.some((key) => key === letter.toLocaleLowerCase()) || guesses.some((key) => key === letter.toLocaleUpperCase()) || guessLimit <= 0}
                        onClick={handleClickKey}
                    />
                }

            })}
        </div>
    )
}