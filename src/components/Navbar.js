import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.Abouttext}
                </Link>
              </li>
            </ul>

          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{width:'30px', height:'30px', cursor:'pointer'}} onClick = {props.toggleMode}>
            </div>
          </div> */}

            <div className={`form-check form-switch my-5 text-${props.mode === "dark" ? "light" : "dark"}`}>
              <label htmlFor="toggle">{props.labelText}</label>
              <input
                onClick={props.changeTheme}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                name="toggle"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Abouttext: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Maze",
  Abouttext: "About us",
};
