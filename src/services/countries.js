import { checkError, client } from './client.js';

export async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
