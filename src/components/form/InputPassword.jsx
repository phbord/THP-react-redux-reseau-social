import React from 'react';

const InputPassword = ({name, value, onChange, children}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="password" 
              value={value} 
              id={name} 
              name={name} 
              onChange={onChange} 
              className="form-control" />
    </div>
  );
};

export default InputPassword;