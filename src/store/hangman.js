import { createSlice } from "@reduxjs/toolkit";
/* import images to use to build the hangman image */
import Hangman0 from "../images/state1.GIF"
import Hangman1 from "../images/state2.GIF"
import Hangman2 from "../images/state3.GIF"
import Hangman3 from "../images/state4.GIF"
import Hangman4 from "../images/state5.GIF"
import Hangman5 from "../images/state6.GIF"
import Hangman6 from "../images/state7.GIF"
import Hangman7 from "../images/state8.GIF"
import Hangman8 from "../images/state9.GIF"
import Hangman9 from "../images/state10.gif"
import Hangman10 from "../images/state11.GIF"

import hangmanDictionary from "../dictionary.txt"

import dictionary from "../dictionary";


export const hangmanSlice = createSlice({
    name: "hangman",

    initialState: {
        incorrectGuesses: 0,
        /* state is an array that will be accessed to display the correct image */
        hangmanImages: [
            Hangman0,
            Hangman1,
            Hangman2,
            Hangman3,
            Hangman4,
            Hangman5,
            Hangman6,
            Hangman7,
            Hangman8,
            Hangman9,
            Hangman10,
        ],
        dictionary: hangmanDictionary,
        gameWord: "",
        hiddenGameWord: "",
    },

    reducers: {
        /* increase the number of wrong guesses */
        increaseWrongGuess: (state) => {
            state.incorrectGuesses += 1
        },

        /* resets the value for the number of wrong guesses */
        resetGuesses: (state) => {
            state.incorrectGuesses = 0
        },

        /* generates the game word */
        setGameWord: (state) => {
            /* creates an array from the dictionary using each new line as the point to split from */
            const dictionaryArray = dictionary.split("\n")

            /* gets a random word from the array using Math.floor and Math.random to return a whole number to choose from an array position. Found how to do this from url: https://www.w3schools.com/js/js_random.asp*/
            state.gameWord = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)]
        },

        /* generates a hidden version of the chosen game word */
        createHiddenWord: (state) => {
            /* hides the word that the user will be shown to guess from. Replaces every letter with an underscore my mapping through the array generated from the "gameWord" varaiable */
            let gameWord = state.gameWord

            let letters = new RegExp(/[a-zA-Z]/)

            /* uses test method to see if each index in array is a letter then modifies index to an underscore if true. Found how to check this from url: https://stackoverflow.com/questions/23136947/javascript-regex-to-return-letters-only */

            state.hiddenGameWord = gameWord.split("").map((letter) => {
                                        if (letters.test(letter)) {
                                           return letter = "_";
                                        } else {
                                            return letter
                                        }
                                        }).join("")

        },

        /* the letter corresponding to the button that was clicked is sent and it is checked whether the letter matches any of those in the game word. The corresponding place in the hidden game word is then revealed. If the guess is incorrect then the state on incorrect guesses is incremented*/
        checkLetterMatch: (state, action) => {

            let gameWord = state.gameWord

            let hiddenWord = state.hiddenGameWord

            let splitGameWord = gameWord.split("")

            let splitHiddenWord = hiddenWord.split("")

            let letter = action.payload

            if (splitGameWord.join("").includes(letter) || splitGameWord.join("").includes(letter.toLowerCase())) {
                for (let i = 0; i < splitGameWord.length; i++) {
                    if (letter === splitGameWord[i]) {
                        splitHiddenWord[i] = letter
                        
                    } else if (letter.toLowerCase() === splitGameWord[i]) {
                        splitHiddenWord[i] = letter.toLowerCase()
                    }

                    state.hiddenGameWord = splitHiddenWord.join("")

                }
            }  else {
                state.incorrectGuesses += 1
            }
        },
    }
})

export const { increaseWrongGuess, resetGuesses, setGameWord, createHiddenWord, checkLetterMatch } = hangmanSlice.actions

export default hangmanSlice.reducer