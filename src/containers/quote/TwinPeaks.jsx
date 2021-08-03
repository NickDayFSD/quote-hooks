import React, { useState } from 'react';
import fetchQuote from '../../services/twinPeaksApi';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';

const TwinPeaks = () => {
  const [quote, getQuote] = useState();

  const quoter = async () => {
    const newQuote = await fetchQuote();
    getQuote(newQuote);
  };

  return (
    <>
      <Quote text={quote} />
      <Load onClick={quoter} />
    </>
  );
};

export default TwinPeaks;
