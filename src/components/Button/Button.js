import React from 'react';
import "./buttonStyle.css";

function Button(props) {
  return (
  <button className="btnStyle" onClick={props.onClick}>{props.children}</button>
  );
}
export default Button
