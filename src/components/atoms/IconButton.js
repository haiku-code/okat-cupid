import React from 'react';
import './Button.css';

const Static = ({onClick, iconClass, wrapperClass}) => {
  return (
    <span className={wrapperClass}>
      <i className="material-icons cursor-pointer" onClick={onClick}>{iconClass}</i>
    </span>
  )
};

const Toggle = ({onClick, isOn, onClass, OffClass, wrapperClass}) => {
  return (
    <span className={wrapperClass}>
       <i className="material-icons cursor-pointer" onClick={onClick}>{isOn ? onClass : OffClass}</i>
    </span>
  )
};

const IconButton = {
  Static: Static,
  Toggle: Toggle
};

export default IconButton;
