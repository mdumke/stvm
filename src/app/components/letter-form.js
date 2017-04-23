import React from 'react'

export default props => {
  return (
    <div className="letter-form card">
      <div className="card-block">

        <p>Please enter the respective number of letters you saw:</p>

        <form action="#" className="form-inline">
          <label className="mr-sm-2" htmlFor="s">S</label>
          <input className="input-small form-control mb-2 mr-sm-4 mb-sm-0" id="s" type="number" placeholder="0" />

          <label className="mr-sm-2" htmlFor="t">T</label>
          <input className="input-small form-control mb-2 mr-sm-4 mb-sm-0" id="t" type="number" placeholder="0" />

          <label className="mr-sm-2" htmlFor="u">U</label>
          <input className="input-small form-control mb-2 mr-sm-4 mb-sm-0" id="u" type="number" placeholder="0" />

          <button className="btn btn-success letter-form__button" type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}
