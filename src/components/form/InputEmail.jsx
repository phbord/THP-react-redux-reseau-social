import React from 'react';

const InputEmail = ({name, value, onChange, children}) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor={name}>{children}</label>
      <input type="email" 
              value={value} 
              id={name} 
              name={name} 
              onChange={onChange} 
              className="form-control" />
    </div>
  );
};

export default InputEmail;