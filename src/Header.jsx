import React from "react";
import logo from "./assets/marvel-logo.png";
import Button from "./component/Button";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-container">
          <a className="navbar-brand" href="#">
            <div className="logo me-3">
              <img src={logo} alt="img" width={100} />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="">
                Dashboard
              </a>
              <a className="nav-link" href="">
                Games
              </a>
              <a className="nav-link" href="">
                Blog
              </a>
              <a className="nav-link" href="">
                Contact us
              </a>
              <a className="nav-link" href="">
                About
              </a>
            </div>
          </div>
          <Button className="d-none d-lg-block">Log in</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
