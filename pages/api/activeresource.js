import axios from 'axios';
import { async } from 'regenerator-runtime';

export default async function activeResource(req, res) {
  const axiosRes = await axios.get(`${process.env.API_URL}/activeresource`);
  const resource = axiosRes.data;

  return res.send(resource)
}