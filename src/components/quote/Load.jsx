import React from 'react';
import PropTypes from 'prop-types';

const Load = (onClick) => (
  <>
    <button onClick={onClick}>Load Quote</button>
  </>
);

Load.PropTypes = {
  thing: PropTypes.thing,
};

export default Load;
