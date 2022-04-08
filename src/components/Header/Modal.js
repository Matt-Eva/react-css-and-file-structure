import React from 'react'
import "./Modal.css"

function Modal({showModal, toggleModal}) {

  const className = showModal ? "modal" : "modal--no-display"

  console.log(className)
  return (
    <div className={className}>
      <div className="modal__user-interaction">
        <h1>This is a modal</h1>
        <button onClick={toggleModal}>X</button>
      </div>
    </div>
  )
}

export default Modal