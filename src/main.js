import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export class Geomagic {
  constructor(httpClient) {
    this.client = httpClient;
  }

  async getLocationDataByIp(ipAddress) {
    const { data } = await this.client.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

    return new GeoApiResponse(data);
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
    return this[fieldName];
  }
}

export default new Geomagic(axios);
