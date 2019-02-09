import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export class Geomagic {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async getLocationDataByIp(ipAddress) {
    const { data } = await this.client.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

    const geoData = new GeoApiResponse(data);

    return geoData.get('city') || 'No such info in our service, sorry. Try again!';
  }
}

class GeoApiResponse {

  constructor({ city, country, regionName, timezone, zip }) {
    this.city = city;
    this.country = country;
    this.regionName = regionName;
    this.timezone = timezone;
    this.zip = zip;
  }

  get(fieldName) {
    if (this[fieldName]) {
      return this[fieldName];
    }
  }
}

export default new Geomagic(axios);
