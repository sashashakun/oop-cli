import axios from 'axios';
import main from '../src/main';

describe('#main()', () => {
  beforeEach(() => {
    axios.get = () => ({ data: { city: 'ololo' } });
  });

  describe('when data exists in the service', () => {
    it('returns city', async () => {
      const data = await main();
      expect(data).toBe('ololo');
    });
  });
});
