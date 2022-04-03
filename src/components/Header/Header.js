import React from 'react'
import "./Header.css"
import Button from "react-bootstrap/Button"
import ToggleSidebar from './ToggleSidebar'

function Header({toggleModal}) {
  return (
    <div className="header">
        <h1 className="header__title">Title</h1>
        <button className="header__toggle-modal-btn" onClick={toggleModal}>Toggle Modal</button>
        <div className="header__toggle-sidebar-box">
          <ToggleSidebar />
        </div>
    </div>
  )
}

export default Header