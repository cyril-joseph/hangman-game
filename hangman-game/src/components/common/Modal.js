export default function Modal({ type, setModal }) {
    let modalContent = null
    switch (type) {
        case 'win': {
            modalContent = (<>
                <h1>You Won!!!</h1>
                <span>Press <strong>Restart</strong> to start a new game.</span>
            </>)
            break;
        }
        case 'lost': {
            modalContent = (<>
                <h1>Try again!!!</h1>
                <span> Press <strong>Restart</strong> to start a new game.</span>
            </>)
            break;
        }
        case 'help': {
            modalContent = (<>
                <div className="help-header">
                    <h3> Instructions / Help</h3>
                    <span onClick={() => setModal({ type: '', open: false })}>X</span>
                </div>
                <ol>
                    <li>There is a random word you have to guess.</li>
                    <li>You have 10 attempts to do so.</li>
                    <li>Click on <strong>Alphabet</strong> keys to start playing.</li>
                    <li>If alphabet exists in the word, all its instances are revealed.</li>
                    <li>If alphabet does not exist you loose a live, Hangman is drawn.</li>
                    <li>Guess before the drawing completes.</li>
                    <li>Hangman is hanged. Game will be over. Restart to continue.</li>
                    <li>No timer... Have fun!!.</li>
                </ol>
            </>)
            break;
        }
        default: modalContent = null
    }

    return (
        <div className={`modal ${type ? type + '-modal' : ''}`}>
            {modalContent}
        </div>
    )
}