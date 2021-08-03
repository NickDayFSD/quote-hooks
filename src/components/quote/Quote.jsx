import React from 'react';
import PropTypes from 'prop-types';

const Display = (quote) => (
  <>
    <p>
      {quote.quoteText} - {quote.name}
    </p>
  </>
);

Display.PropTypes = {
  quote: PropTypes.array,
};

export default Display;
