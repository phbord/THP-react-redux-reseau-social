import React from 'react';
import { useHistory } from 'react-router-dom';

const Redirection = (newUrl) => {
  const history = useHistory()
  if (history[history.length - 1] !== newUrl) history.push(newUrl)
};

export default Redirection;