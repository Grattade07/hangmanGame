import { useSelector } from "react-redux";
import { resetGuesses, setGameWord, createHiddenWord } from "../store/hangman";
import { useDispatch } from "react-redux";
import { Image, Button } from "react-bootstrap";

/* generates an area to show the hangman image stages and  provides a button to start/restart the game */
function HangmanImage () {
    /* gets the image array */
    const hangman = useSelector((state) => state.hangman.hangmanImages)

    const guessCount = useSelector((state) => state.hangman.incorrectGuesses)

    const dispatch = useDispatch()

    /* selects all alphabet buttons */
    const letterButtons = document.querySelectorAll(".alphabetButtons")

    /* re-enables any disabled buttons */
    const enableButtons = () => {
        return letterButtons.forEach((button) => {
            button.disabled = false
        })
    }

    /* the image shown is synced to the number of incorrect guesses by the user */
    const hangmanImage = hangman[guessCount]

    return (
        <div>
            <Image src={hangmanImage} fluid rounded id="hangmanImage"></Image>
            <div>
                {/* button resets the game states */}
                <Button onClick={() => {
                    dispatch(resetGuesses())
                    dispatch(setGameWord())
                    dispatch(createHiddenWord())
                    enableButtons()
                }
                }>Start Game / Restart</Button>
            </div>
        </div>
    )
}

export default HangmanImage