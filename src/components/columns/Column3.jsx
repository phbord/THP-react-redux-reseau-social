import React from 'react';

const Column3 = ({left, center, right}) => {
  return (
    <div className="row">
      <div className="col-12 col-md-4">{left}</div>
      <div className="col-12 col-md-4">{center}</div>
      <div className="col-12 col-md-4">{right}</div>
    </div>
  );
};

export default Column3;