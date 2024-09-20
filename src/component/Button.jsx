import React from "react";

const Button = ({ children, className }) => {
  console.log(className);
  return <div className={`btn c-btn ${className}`}>{children}</div>;
};

export default Button;
