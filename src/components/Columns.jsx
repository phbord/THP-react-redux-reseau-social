import React from 'react';

import Column2 from 'components/columns/Column2';
import Column3 from 'components/columns/Column3';
import Button from 'components/buttons/Button';

const Columns = () => {
  const left = <Button endClass="primary">Valider</Button>
  const right = 'colonne droite'
  const center = 'colonne centrale'

  return (
    <div className="mb-5">
      <h3 className="mt-5">Colonnes</h3>
      <Column2 left={left} right={right} />
      <Column3 left={left} center={center} right={right} />
    </div>
  );
};

export default Columns;