import React, { Component } from 'react'

export default class LetterForm extends Component {
  renderFields () {
    return this.props.letters.map(letter => {
      return (
        <div key={letter} className="form-group">
          <label className="mr-sm-2" htmlFor={letter}>{letter}</label>
          <input
            className="input-small form-control mb-2 mr-sm-4 mb-sm-0"
            ref={letter}
            id={letter}
            type="text"
            placeholder="0" />
        </div>
      )
    })
  }

  render () {
    if (this.props.gameState !== 'collect_answers') return <div></div>

    return (
      <div className="letter-form card">
        <div className="card-block">

          <p>Please enter the respective number of letters you saw:</p>

          <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
            {this.renderFields()}

            <button className="btn btn-success letter-form__button" type="submit">
              Check
            </button>
          </form>

        </div>
      </div>
    )
  }

  onFormSubmit (event) {
    event.preventDefault()

    const answers = {}

    for (let letter of this.props.letters) {
      answers[letter] = Number(this.refs[letter].value) || 0
      this.refs[letter].value = ''
    }

    this.props.onAnswer(answers)
  }
}
