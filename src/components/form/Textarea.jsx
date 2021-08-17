import React from 'react';

const Textarea = ({name, value, onChange, label}) => {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} 
            name={name} 
            onChange={onChange} 
            className="form-control">{value}</textarea>
    </div>
  );
};

export default Textarea;