export const BASE_URL = 'https://reqres.in/';

export default async function apiCall(query, params) {
 try {
  const response = await fetch(`${BASE_URL}${query}`, params);
  const data = await response.json();
  return Promise.resolve(data);
 } catch (error) {
  return Promise.reject(error);
 }
};