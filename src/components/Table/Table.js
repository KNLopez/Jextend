import React, { Component } from 'react'

export default class Table extends Component {
  render() {

    const thead = this.props.thead.map((head,i) => (
      <th key={i}>{head}</th>
    ));

    const tbody = this.props.tbody.map((row,i) => {
      let tds = Object.values(row).map((value,i)=>(
        <td key={i}> {value}</td>
      ))
      return (<tr key={i}>{tds}</tr>)
    });

    return (
      <div className="table-container">
        <div className="tale-container__header"></div>
        <table>
          <thead>
            <tr>
              {thead}
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    )
  }
}
