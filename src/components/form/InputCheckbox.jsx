import React from 'react';

const InputCheckbox = ({name, value, onChange, children}) => {
  return (
    <div className="form-check">
      <input type="checkbox" 
              value={value} 
              id={name} 
              name={name} 
              onChange={onChange} 
              className="form-check-input" />
      <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
  );
};

export default InputCheckbox;