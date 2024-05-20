import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navcontainer">
      <p>
        SmarTrack
      </p>
      <nav className="navlinks">
      <NavLink to="/">
        <div>
          Dashboard
        </div>
      </NavLink>
        <NavLink to="/management">
          <div>
            Management
          </div>
        </NavLink>
        <NavLink to="/add">
          <div>
            Add
          </div>
        </NavLink>
        <NavLink to="/transfer">
          <div>
            Transfer
          </div>
        </NavLink>
        <NavLink to="/reports">
          <div>
            Reports
          </div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar;