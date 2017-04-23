import React, { Component } from 'react'

export default class DisplayArea extends Component {
  renderLetters() {
    return this.props.letters.map(({letter, top, left}) => {
      return (
        <div
          key={Math.random()}
          className="display-area__letter"
          style={{
            top,
            left
          }}>
          {letter}
        </div>
      )
    })
  }

  render () {
    return (
      <div className="card letter-card">
        <div
          id="display-area"
          className={this.props.flashing ?
            'display-area animated-flash' :
            'display-area'}>
            {this.renderLetters()}
        </div>
      </div>
    )
  }
}
