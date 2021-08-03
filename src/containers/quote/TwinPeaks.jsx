import React, { useState } from 'react';
import fetchQuote from '../../services/twinPeaksApi';
import Display from '../../components/quote/Quote';
import Load from '../../components/quote/Load';

const TwinPeaks = () => {
  const [quote, getQuote] = useState({});

  const quoter = async () => {
    const quote = await fetchQuote();
    getQuote(quote);
  };

  return (
    <>
      <Display quote={quote} />
      <Load onClick={quoter} />
    </>
  );
};

export default TwinPeaks;
