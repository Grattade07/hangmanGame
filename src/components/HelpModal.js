import Modal from "react-bootstrap/Modal";
import { ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";

/* generates the modal that will be shown when the help button is pressed. Styled following the documentation seen on url: https://react-bootstrap.github.io/components/modal/ */
function HangmanModal () {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleOpen = () => setShow(true)

    return (
        <div>
            <div>
                <Button onClick={handleOpen} variant="primary">HELP</Button>
            </div>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <ModalHeader closeButton>
                        <ModalTitle>Help</ModalTitle>
                    </ModalHeader>
                    
                    <ModalBody>
                    Hangman is a simple word guessing game. You ahve to try to figure out an unknown word by guessing letters. If too many letters which do not appear in the word are guessed, the player is hanged (and loses). You have 10 guesses until you lose.
                    <br/>
                    <br/>
                    To select a letter you wish to guess, click its button. 
                    <br/>
                    <br/>
                    If you wish to restart your current game you can click the "Play/Restart" button.
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClose} variant="primary">Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default HangmanModal