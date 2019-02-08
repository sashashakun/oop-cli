import { makeGeoIpLocator } from '../src/main';

describe('#main()', () => {
  let locatorToTest;

  beforeEach(() => {
    locatorToTest = makeGeoIpLocator({ get: () => ({ data: { city: 'ololo' } }) });
  });

  describe('when data exists in the service', () => {
    it('returns city', async () => {
      const data = await locatorToTest();
      expect(data).toBe('ololo');
    });
  });
});
