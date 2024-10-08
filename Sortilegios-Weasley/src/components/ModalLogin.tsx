import { useState } from "react";
import { Button, Modal } from "react-bootstrap"

export const ModalLogin =  () =>{
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return(
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
        </Modal>
        </>
    )
}