import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./hangman"

export default configureStore({
    reducer: {
        hangman: hangmanReducer
    }
})