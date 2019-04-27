import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <NavLink exact to={process.env.PUBLIC_URL + '/'}>JIRA EXTENSION</NavLink>
        </div>
        <ul>
          <li><NavLink exact to={process.env.PUBLIC_URL + '/'}>Projects</NavLink></li>
          <li><NavLink to="/risks">Risks</NavLink></li>
          <li><NavLink to="/user-needs">User Needs</NavLink></li>
          <li><NavLink to="/version-requirements">Version Requirements</NavLink></li>
          <li><NavLink to="/diff-requirements">Diff Requirements</NavLink></li>
          <li><NavLink to="/components">Components</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      </div>
    )
  }
}
