import React, { Component } from 'react'
import TopbarRight from './TopbarRight'
import './Topbar.less'

export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="breadcrumbs">
          <a href="/projects">Projects</a> / Project name
        </div>
        <TopbarRight />
      </div>
    )
  }
}
