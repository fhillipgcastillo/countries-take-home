export const makeGetRequest = (endpoint) => {
  return fetch(endpoint)
  .then(res => res.json())
  .catch(err => err);
};

export const getCountries = async () => {
  const endpoint = `https://restcountries.eu/rest/v2/all`;
  return await makeGetRequest(endpoint);
};

export const getCountryByName = async (name) => {
  const endpoint = `https://restcountries.eu/rest/v2/name/${name}`;
  return await makeGetRequest(endpoint);
}
