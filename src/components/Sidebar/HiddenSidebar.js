import React from 'react'
import "./HiddenSidebar.css"

function HiddenSidebar(/*{ toggleSidebar, showSidebar}*/) {

  /*const sidebarClass = showSidebar ? "hidden-sidebar": "hidden-sidebar--no-display";*/

  return (
    <div className="hidden-sidebar">
        <div className="hidden-sidebar__sidebar">
            <ul>
                <li>Option</li>
                <li>Option</li>
                <li>Option</li>
            </ul>
        </div>
        <div className="hidden-sidebar__click-away" /*onClick={() => toggleSidebar()}*/>

        </div>
    </div>
  )
}

export default HiddenSidebar