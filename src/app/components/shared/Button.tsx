
import React from "react";
import "./Button.css";

const Button = ({ text = 'Proceed'}) => {
  return (
    <button
      className={`custom-button`}
      style={{ "--content": `'${text}'` } as React.CSSProperties}
    >
      <div className="left"></div>
        {text}
      <div className="right"></div>
    </button>
  );
};

export default Button;

