import React from 'react'
import FontAwesome from 'react-fontawesome'

export default props => {
  return (
    <div className="btn-group main-buttons">
      <button type="button" className="btn btn-success main-buttons__left">Flash (click or hit return)</button>
      <button type="button" className="btn btn-secondary main-buttons__right">
        <FontAwesome
          style={{ color: 'gray' }}
          name="gear" />
      </button>
    </div>
  )
}
