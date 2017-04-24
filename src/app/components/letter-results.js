import React, { Component } from 'react'

export default class LetterResults extends Component {
  renderFields () {
    return this.props.availableLetters.map(letter => {
      const actualNumber = this.getActualCountFor(letter)
      const correct = actualNumber === this.props.answers[letter]

      return (
        <div key={letter} className={`form-group has-${correct ? 'success' : 'danger'}`}>
          <label className='mr-sm-2' htmlFor={letter}>
            {letter}
          </label>

          <input
            className={`input-small form-control form-control-${correct ? 'success' : 'danger'} mb-2 mr-sm-4 mb-sm-0`}
            id={letter}
            placeholder={this.props.answers[letter]}
            type='text' />
        </div>
      )
    })
  }

  render () {
    if (this.props.gameState !== 'show_results') return <div></div>

    return (
      <div className='letter-form card'>
        <div className='card-block'>

          <p>Please enter the respective number of letters you saw:</p>

          <form onSubmit={this.props.onDone} className='form-inline'>
            {this.renderFields()}

            <button className='btn btn-success letter-form__button' type='submit'>Done</button>
          </form>

        </div>
      </div>
    )
  }

  getActualCountFor (letter) {
    return this.props
      .letters
      .filter(dataSet => dataSet.letter === letter)
      .length
  }
}
