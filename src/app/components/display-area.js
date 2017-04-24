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
    const showLetters =
      this.props.flashing ||
      this.props.gameState === 'show_results'

    return (
      <div className="card letter-card">
        <div
          id="display-area"
          className={`display-area ${showLetters ? 'animated-flash' : ''}`}>
            {this.renderLetters()}
        </div>
      </div>
    )
  }
}
