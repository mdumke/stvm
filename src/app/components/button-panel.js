import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class ButtonPanel extends Component {
  componentDidUpdate () {
    if (this.props.gameState === 'ready') {
      this.refs.flashButton.focus()
    }
  }

  render () {
    if (this.props.gameState !== 'ready') return <div></div>

    return (
      <div className="btn-group main-buttons">
        <button
          type="button"
          className="btn btn-secondary main-buttons__left">

          <FontAwesome
            style={{ color: 'gray' }}
            name="info-circle" />
        </button>

        <button
          type="button"
          ref="flashButton"
          onClick={this.props.onFlash}
          className="btn btn-success main-buttons__middle">
          Flash
        </button>

        <button
          type="button"
          className="btn btn-secondary main-buttons__right">

          <FontAwesome
            style={{ color: 'gray' }}
            name="gear" />
        </button>
      </div>
    )
  }
}
