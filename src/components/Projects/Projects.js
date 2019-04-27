import React, { Component } from 'react'
import Table from '../Table/Table'

export default class Projects extends Component {

  state={
    data: [
      {
        name: "Enlil",
        key: "EN1"
      },
      {
        name: "Enlil(Staging)",
        key: "EN2"
      }
    ]
  }

  render() {
    return (
      <div className="page-container">
        <h2>Projects</h2>
        <div className="panel">
          <Table
            thead={Object.keys(this.state.data[0])}
            tbody={this.state.data}
            search={true}
            showentries={10}
            />
        </div>
      </div>
    )
  }
}
