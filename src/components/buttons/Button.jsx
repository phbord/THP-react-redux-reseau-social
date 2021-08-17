import React from 'react';

const Button = ({endClass, children}) => {
  const className = `btn btn-${endClass}`

  return (
    <button className={className} type="button">{children}</button>
  );
};

export default Button;