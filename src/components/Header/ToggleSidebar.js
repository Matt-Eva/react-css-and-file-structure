import React from 'react'
import "./ToggleSidebar.css"

function ToggleSidebar({toggleSidebar}) {
  return (
    <div className="toggle-sidebar" onClick={() => toggleSidebar()}>
        <div className="toggle-sidebar__line"></div>
        <div className="toggle-sidebar__line"></div>
        <div className="toggle-sidebar__line"></div>
    </div>
  )
}

export default ToggleSidebar