import fakeApi from './fake-api.js';

export const getLocations = async () => {
  return await fakeApi.getLocations();
};

export const getIncidentsByLocationId = async (locationId: string) => {
  return await fakeApi.getIncidentsByLocationId(locationId);
};
