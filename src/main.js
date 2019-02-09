import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export class Geomagic {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async getLocationDataByIp(ipAddress) {
    const { data } = await this.client.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

    return data.city || 'No such info in our service, sorry. Try again!';
  }
}

export default new Geomagic(axios);
