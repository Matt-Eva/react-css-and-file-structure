import React from 'react'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'

function ExampleModal({showModal, toggleModal}) {
  return (
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Input field</Form.Label>
                        <Form.Control type="text"></Form.Control>
                        <Form.Text>You can type descriptive text here</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => e.preventDefault()}>Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={toggleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
  )
}

export default ExampleModal