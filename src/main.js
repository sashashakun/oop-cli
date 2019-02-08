import axios from 'axios';

const geoLocationServiceUrl = 'http://ip-api.com/json/';

export default async (ipAddress) => {
  try {
    const { data: locationData } = await axios.get(`${geoLocationServiceUrl}${ipAddress || ''}`);

    if (locationData.city) {
      return locationData.city;
    }

    console.log('No such info in our service, sorry. Try again!');
  } catch (e) {
    console.log(e);
  }

  return undefined;
};
