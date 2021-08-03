import fetchQuote from './twinPeaksApi';

describe('API fetcher', () => {
  it('fetches a random quote from the API', async () => {
    const res = await fetchQuote();

    expect(res).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      quoteText: expect.any(String),
      quoteTextOnly: expect.any(String),
    });
  });
});
