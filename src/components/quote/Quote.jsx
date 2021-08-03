/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ quote }) => {
  return (
    <>
      <p>
        {quote.quoteText} - {quote.name}
      </p>
    </>
  );
};

Display.PropTypes = {
  quote: PropTypes.object,
};

export default Display;
