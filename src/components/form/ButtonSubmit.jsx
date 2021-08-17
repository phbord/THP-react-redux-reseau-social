import React from 'react';

const ButtonSubmit = ({children}) => {
  return (
    <div className="form-group my-4">
      <button type="submit" className="btn btn-primary">{children}</button>
    </div>
  );
};

export default ButtonSubmit;