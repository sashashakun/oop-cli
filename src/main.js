import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export const makeGeoIpLocator = httpClient => async (ipAddress) => {
  try {
    const { data: locationData } = await httpClient.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

    return locationData.city || 'No such info in our service, sorry. Try again!'
  } catch (e) {
    console.log(e);
  }

  return undefined;
};

export default makeGeoIpLocator(axios);
