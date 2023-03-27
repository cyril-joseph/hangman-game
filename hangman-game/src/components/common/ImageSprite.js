import state1 from '../../assets/images/state1.GIF'
import state2 from '../../assets/images/state2.GIF'
import state3 from '../../assets/images/state3.GIF'
import state4 from '../../assets/images/state4.GIF'
import state5 from '../../assets/images/state5.GIF'
import state6 from '../../assets/images/state6.GIF'
import state7 from '../../assets/images/state7.GIF'
import state8 from '../../assets/images/state8.GIF'
import state9 from '../../assets/images/state9.GIF'
import state10 from '../../assets/images/state10.gif'
import state11 from '../../assets/images/state11.GIF'

export default function ImageSprite({ imageCode }) {
    let imageSrc = state1

    switch (imageCode) {
        case 10: {
            imageSrc = state1
            break;
        }
        case 9: {
            imageSrc = state2
            break;
        }
        case 8: {
            imageSrc = state3
            break;
        }
        case 7: {
            imageSrc = state4
            break;
        }
        case 6: {
            imageSrc = state5
            break;
        }
        case 5: {
            imageSrc = state6
            break;
        }
        case 4: {
            imageSrc = state7
            break;
        }
        case 3: {
            imageSrc = state8
            break;
        }
        case 2: {
            imageSrc = state9
            break;
        }
        case 1: {
            imageSrc = state10
            break;
        }
        case 0: {
            imageSrc = state11
            break;
        }
        default: imageSrc = state1
    }
    return (
        <>
            <img src={imageSrc} alt={`hangman_${imageCode}`} />
        </>
    )
}