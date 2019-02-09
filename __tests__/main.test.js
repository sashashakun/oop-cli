import { Geomagic } from '../src/main';

describe('#main()', () => {
  let locatorToTest;

  beforeEach(() => {
    locatorToTest = new Geomagic({ get: () => ({ data: { city: 'ololo' } }) });
  });

  describe('when data exists in the service', () => {
    it('returns city', async () => {
      const data = await locatorToTest.getLocationDataByIp();
      expect(data).toMatchObject({ city: 'ololo' });
    });
  });
});
