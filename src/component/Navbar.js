import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/reactapp">
          {props.title}
        </a> */}
        <Link className="navbar-brand" to="/reactapp">
          {props.title}
        </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/reactapp">
                Home
              </Link>
            </li>
            {
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
              </li>
            }
            {
              <li className="nav-item dropdown">
                <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
                <ul className="dropdown-menu">
                  <li>
                  <Link className="dropdown-item" to="/action">
                    Action
                  </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/another-action">
                    Another action
                  </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/something-else">
                    Something else here
                  </Link>
                  </li>
                </ul>
              </li>
            }
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" onClick={props.toggleMode}
          />
          <label
            className="form-check-label "
            htmlFor="flexSwitchCheckDefault "
          >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
// Navbar.defaultProps = {
//   title: 'Set a Title here',
//   aboutText : 'About text'
// };