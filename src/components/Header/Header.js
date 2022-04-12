import React from 'react'
import "./Header.css"
import ToggleSidebar from "./ToggleSidebar"
import {Link} from "react-router-dom"

function Header(/*{toggleSidebar, toggleModal}*/) {
  return (
    <div className="header">
        <ToggleSidebar /*toggleSidebar={toggleSidebar}*/ />
        <h1 className="header__title">Logo</h1>
        <Link to="/" className="header__link header__home-link">Home</Link>
        <Link to="/about" className="header__link header__about-link">About</Link>
        <button className="header__toggle-modal-btn" /*onClick={toggleModal}*/>Toggle Modal</button>
    </div>
  )
}

export default Header