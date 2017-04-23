import React from 'react'

export default props => {
  return (
    <div className="letter-form card">
      <div className="card-block">

        <p>Please enter the respective number of letters you saw:</p>

        <form action="#" className="form-inline">
          <div className="form-group has-success">
            <label className="mr-sm-2" htmlFor="s">S</label>
            <input className="input-small form-control form-control-success mb-2 mr-sm-4 mb-sm-0" id="s" type="text" placeholder="0" />
          </div>

          <div className="form-group has-danger">
            <label className="mr-sm-2" htmlFor="t">T</label>
            <input className="input-small form-control form-control-danger mb-2 mr-sm-4 mb-sm-0" id="t" type="text" placeholder="0" />
          </div>

          <div className="form-group has-danger">
            <label className="mr-sm-2" htmlFor="u">U</label>
            <input className="input-small form-control form-control-danger mb-2 mr-sm-4 mb-sm-0" id="u" type="text" placeholder="0" />
          </div>

          <button className="btn btn-success letter-form__button" type="submit">Done</button>
        </form>

      </div>
    </div>
  )
}
