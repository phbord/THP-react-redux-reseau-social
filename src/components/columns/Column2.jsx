import React from 'react';

const Column2 = ({left, right}) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">{left}</div>
      <div className="col-12 col-md-6">{right}</div>
    </div>
  );
};

export default Column2;