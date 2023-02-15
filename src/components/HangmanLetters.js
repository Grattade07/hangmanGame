import { checkLetterMatch, setGameWord, createHiddenWord, resetGuesses } from "../store/hangman"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

/* generates the keyboard for the alphabet for the user to guess the word */
function HangmanLetters() {
    const hiddenGameWord = useSelector((state) => state.hangman.hiddenGameWord)

    const incorrectGuesses = useSelector((state) => state.hangman.incorrectGuesses)

    const dispatch = useDispatch()

    /* selects all alphabet buttons */
    const letterButtons = document.querySelectorAll(".alphabetButtons")

    /* re-enables any disabled buttons */
    const enableButtons = () => {
        return letterButtons.forEach((button) => {
            button.disabled = false
        })
    }

    /* function checks whether the win or lose conditions have been met. Displays an alert and resets the game if either condition is true */
    const checkGameState = () => {
        if(hiddenGameWord.length > 0 && !hiddenGameWord.includes("_")) {
            setTimeout(() => {
                alert("Congratulations You've won!")
                dispatch(setGameWord())
                dispatch(createHiddenWord())
                dispatch(resetGuesses())
                enableButtons()
            }, 200)
        } else if (incorrectGuesses === 10) {
            setTimeout(() => {
                alert("That's too many wrong guesses. You've lost!")
                dispatch(setGameWord())
                dispatch(createHiddenWord())
                dispatch(resetGuesses())
                enableButtons()
            }, 200)
        }
    }

    /* runs the checkGameState function after the hiddenGameWord or incorrectGuesses state has been updated */
    useEffect(() => checkGameState(), [hiddenGameWord, incorrectGuesses])

    /* creates and array of the alphabet to then use to make each button letter. Found idea from url: https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-the-alphabet/53596422#53596422  */
    const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    /* renders the button for each letter using array.map. */
    const alphabetButtons = alphabetArray.map((letter) => 
        <li key={letter}><button className="alphabetButtons" onClick={(e) => {
            dispatch(checkLetterMatch(e.target.innerText))
            e.target.disabled = true
        }}>{letter}</button></li>
    )

    return (
        <ul id="alphabetList">
            {alphabetButtons}
        </ul>
    )
}

export default HangmanLetters