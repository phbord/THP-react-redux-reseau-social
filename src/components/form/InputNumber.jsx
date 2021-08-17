import React from 'react';

const InputNumber = ({name, value, onChange, children}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="number" 
              value={value} 
              id={name} 
              name={name} 
              onChange={onChange} 
              className="form-control" />
    </div>
  );
};

export default InputNumber;