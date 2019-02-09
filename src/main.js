import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export const makeGeoIpLocator = httpClient => async (ipAddress) => {
  const { 
    data = { city: 'No such info in our service, sorry. Try again!' }
  } = await httpClient.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

  return data.city;
};

export default makeGeoIpLocator(axios);
