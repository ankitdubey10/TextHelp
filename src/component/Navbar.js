import React from 'react'
import  PropTypes  from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    {/*  */}
  
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.About}</Link>
        </li>
      </ul>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <ul className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.enableDark} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark View  </label>
      </ul>
    </div>

  </div>
</nav>
  )
}

// this we ensure that the props are string 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}

// if nothing is given thn took these default 
Navbar.defaultProps = {
    title: 'guest user',
    About: 'Nothing'
}

//to make something mandatroy we need to use isrequired
