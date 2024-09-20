import React from "react";
import Button from "./component/Button";

const Hero = () => {
  return (
    <div className="container-fluid mt-3 mt-lg-0">
      <div className="row">
        <div className="col-12">
          <h1 className="text-uppercase hero-title mb-0 ">Iron man</h1>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-12 col-sm-5 hero-details">
          <p className="text-uppercase mb-0 hero-subtitle">overview</p>
          <p className="mt-1">
            Years after retiring from his role as a weapons maker, Tony Stark
            must now suit up to fight against Ghost and Living Laser, who have
            joined forces in attempt to take him and Stark Industries down once
            and for all.
          </p>
        </div>
      </div>

      <div className="row mt-1">
        <div className="buttons col-12 col-sm-8">
          <Button className="me-3 px-4 bg-brand hero-btn">Start Game</Button>
          <Button className="ms-2 px-4 bg-border hero-btn">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
