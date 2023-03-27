import ImageSprite from "./common/ImageSprite";

export default function Images({guessLimit}) {
    return (
        <div className='hangman_image_container'>
            <h2>HANGMAN</h2>
            <ImageSprite imageCode={guessLimit}/>
        </div>
    )
}