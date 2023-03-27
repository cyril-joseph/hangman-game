import wordsArray from '../../../assets/data/words.json'

//check if a letter is existing in an array
export function isExist(word, letter) {
    switch (typeof word) {
        //check if the word value is a string and converts into an array
        case 'string': {
            return word.split('').some((alphabet) => alphabet.toLocaleUpperCase() === letter.toLocaleUpperCase())
        }
            //check if the word value is already an array
        case 'object': {
            return word.some((alphabet) => alphabet.toLocaleUpperCase() === letter.toLocaleUpperCase())
        }
        default: return;
    }
}

//check if all the letters in the word have been guessed
export function isCorrectAnswer(word, guesses) {
    return word.split('').filter((letterInWord) => !guesses.some((guessedLetter) => guessedLetter === letterInWord)).length <= 0
}

//get a random word from dictionary of words.json
export function getWord(wordSize) {
    const matchingWords = wordsArray.filter(word => word.length === wordSize);
    if (matchingWords.length === 0) {
        return 'HANGMAN'; // no matching words found
    }
    const randomIndex = Math.floor(Math.random() * matchingWords.length);
    return matchingWords[randomIndex].toLocaleUpperCase();
}