import React, { Component } from 'react'

import ButtonPanel from './button-panel'
import DisplayArea from './display-area'
import LetterForm from './letter-form'
import LetterResults from './letter-results'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      letters: [
        {
          letter: 'S',
          top: 20,
          left: 40
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <div id="frame" className="frame card">
          <DisplayArea letters={this.state.letters} />
        </div>

        <ButtonPanel />

        <div id="workbench" className="workbench">
          <LetterForm />
          <LetterResults />
        </div>
      </div>
    )
  }
}
