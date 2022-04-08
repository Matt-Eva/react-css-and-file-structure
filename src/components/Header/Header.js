import React from 'react'
import "./Header.css"
import ToggleSidebar from "./ToggleSidebar"
import {Link} from "react-router-dom"

function Header({toggleSidebar, toggleModal}) {
  return (
    <div className="header">
        <ToggleSidebar toggleSidebar={toggleSidebar} />
        <h1 className="header__title">Logo</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button className="header__toggle-modal-btn" onClick={toggleModal}>Toggle Modal</button>
    </div>
  )
}

export default Header