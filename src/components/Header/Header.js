import React from 'react'
import "./Header.css"
import Button from "react-bootstrap/Button"
import ToggleSidebarBootstrap from './ToggleSidebarBootstrap'
import ToggleSidebar from "./ToggleSidebar"

function Header({toggleBootstrapModal}) {
  return (
    <div className="header">
        <h1 className="header__title">Title</h1>
        <div className="header__btn-box">
          <button className="header__toggle-modal-btn" onClick={toggleBootstrapModal}>Toggle Bootstrap Modal</button>
          <button className="header__toggle-modal-btn" onClick={toggleBootstrapModal}>Toggle Modal</button>
        </div>
        <div className="header__menu-box">
          <ToggleSidebar />
          <ToggleSidebarBootstrap />
        </div>
    </div>
  )
}

export default Header