import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">

          <Link className="navbar-brand" to="">Hud Hud Bank</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/pay">Pay</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/save">Save</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/profile">Your Profile</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">LOG OUT</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}