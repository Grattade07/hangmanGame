import { useSelector } from "react-redux"

import HangmanLetters from "./HangmanLetters"

/* generates the template for the hidden word being guessed */
function HangmanWord () {
    const hiddenGameWord = useSelector((state) => state.hangman.hiddenGameWord)
  
    return(
        <div >
            <div id="wordDisplay">
                {hiddenGameWord}
            </div>
            
            <HangmanLetters />
        </div>
    )
}

export default HangmanWord