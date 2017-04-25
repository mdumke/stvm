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
      // ready -> collect_answers -> show_results
      gameState: 'ready',
      settings: {
        availableLetters: ['S', 'T', 'U'],
        numLetters: 6,
        flashDuration: 700 /* ms */
      },
      flashing: false,
      letters: [],
      answers: {}
    }
  }

  render () {
    return (
      <div>
        <div id="frame" className="frame card">
          <DisplayArea
            flashing={this.state.flashing}
            gameState={this.state.gameState}
            letters={this.state.letters} />
        </div>

        <ButtonPanel
          gameState={this.state.gameState}
          onFlash={this.handleFlash.bind(this)} />

        <div id="workbench" className="workbench">
          <LetterForm
            gameState={this.state.gameState}
            onAnswer={this.handleAnswer.bind(this)}
            letters={this.state.settings.availableLetters} />

          <LetterResults
            availableLetters={this.state.settings.availableLetters}
            letters={this.state.letters}
            answers={this.state.answers}
            onDone={this.handleDone.bind(this)}
            gameState={this.state.gameState} />
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
        flashing: false,
        gameState: 'collect_answers'
      })
    }, this.state.settings.flashDuration)
  }

  handleAnswer (answers) {
    this.setState({
      answers,
      gameState: 'show_results'
    })
  }

  handleDone (event) {
    event.preventDefault()

    this.setState({
      gameState: 'ready'
    })
  }

  setRandomLetters () {
    let letters = []

    for (let i = 0; i < this.state.settings.numLetters; i++) {
      letters.push({
        letter: sample(this.state.settings.availableLetters),
        top: Math.floor(Math.random() * 380),
        left: Math.floor(Math.random() * 380)
      })
    }

    this.setState({ letters })
  }

  componentDidMount () {
    this.setRandomLetters()
  }
}
