import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Load = ({ onClick }) => (
  <>
    <button onClick={onClick}>Load Quote</button>
  </>
);

Load.PropTypes = {
  onClick: PropTypes.func,
};

export default Load;
