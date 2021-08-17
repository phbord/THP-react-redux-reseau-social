import React from 'react';

const InputRadioDouble = ({name, value1, value2, onChange, label1, label2}) => {
  return (
    <div className="d-flex">
      <input type="radio" 
              value={value1} 
              id={`${name}-1`} 
              name={name} 
              onChange={onChange} 
              className="form-check-input me-1" />
      <label htmlFor={`${name}-1`} className="form-check-label me-3">{label1}</label>
      <input type="radio" 
              value={value2} 
              id={`${name}-2`} 
              name={name} 
              onChange={onChange} 
              className="form-check-input me-1" />
      <label htmlFor={`${name}-2`} className="form-check-label">{label2}</label>
    </div>
  );
};

export default InputRadioDouble;