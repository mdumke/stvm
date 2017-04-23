import React, { Component } from 'react'
import { sample } from 'lodash'

import ButtonPanel from './button-panel'
import DisplayArea from './display-area'
import LetterForm from './letter-form'
import LetterResults from './letter-results'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      settings: {
        availableLetters: ['S', 'T', 'U'],
        numLetters: 4,
        flashDuration: 500 /* ms */
      },
      flashing: false,
      letters: []
    }
  }

  render () {
    return (
      <div>
        <div id="frame" className="frame card">
          <DisplayArea
            flashing={this.state.flashing}
            letters={this.state.letters} />
        </div>

        <ButtonPanel onFlash={this.handleFlash.bind(this)} />

        <div id="workbench" className="workbench">
          <LetterForm />
          <LetterResults />
        </div>
      </div>
    )
  }

  handleFlash () {
    this.setRandomLetters()

    this.setState({
      flashing: true
    })

    setTimeout(() => {
      this.setState({
        flashing: false
      })
    }, this.state.settings.flashDuration)
  }

  setRandomLetters () {
    let letters = []

    for (let i = 0; i < this.state.settings.numLetters; i++) {
      letters.push({
        letter: sample(this.state.settings.availableLetters),
        top: Math.floor(Math.random() * 180),
        left: Math.floor(Math.random() * 180)
      })
    }

    this.setState({ letters })
  }

}
