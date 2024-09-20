import React from "react";
import heroImg from "./assets/iron-man-hero.png";
import logo from "./assets/marvel-logo.png";
import ironman2 from "./assets/floating-iron-man.png";

const Footer = () => {
  return (
    <footer className="d-none d-lg-block py-2">
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col-12 col-md-3">
            <div className="footer-img-container">
              <img
                src={heroImg}
                alt="img"
                className="img-fit rounded-4"
                width={200}
              />
              <p>IRON MAN</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="div mb-4">
              <p className="footer-heading">Publisher</p>
              <p>Marvel</p>
            </div>
            <div className="div">
              <p className="footer-heading">available on</p>
              <p className="w-25">PC,PS4,Xbox One,Andriod,Nintendo switch</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="div mb-4">
              <p className="footer-heading">genre</p>
              <p>Survival,Battle Royale,sandbox</p>
            </div>
            <div className="div">
              <p className="footer-heading">
                ( <span className="text-lowercase">sr</span> ) rating
              </p>
              <p>T(Teen)</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="div mb-4 mt-2">
              <p className="footer-heading">release date</p>
              <p>April 20,2023</p>
            </div>
            <div className="div">
              <p className="footer-heading">company brand</p>
              <img src={logo} alt="logo" width={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="floating-iron-man">
        <img src={ironman2} alt="irom man 2" className="img-fit" />
      </div>
    </footer>
  );
};

export default Footer;
