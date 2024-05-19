import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <p>
        SmarTrack
      </p>
      <nav>
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