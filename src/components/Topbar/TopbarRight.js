import React, { Component } from 'react'
import { ReactComponent as Notification } from './notification.svg'

export default class TopbarRight extends Component {
  render() {
    return (
      <div className="topbar__right">
        <div className="topbar__right__notification"><Notification/></div>
        <div className="topbar__right__dropdown">
          John Doe
        </div>
        <div className="topbar__right__profile-image">
          <img alt="profile" src="https://www.fillmurray.com/640/360" />
        </div>
      </div>
    )
  }
}
