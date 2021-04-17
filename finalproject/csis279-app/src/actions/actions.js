import axios from 'axios';

const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "http://localhost";
const portApi = process.env.NODE_ENV === "development" ? 3001 : 3001;

const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;

async function getAccount(data) {
  const url = `${baseURLApi}/users/useraccount`;
  return await axios.post(url,data).then(response => response.data.data);
}
async function getPolicies() {
  const url = `${baseURLApi}/users/policies`;
  return await axios.get(url).then(response => response.data.data);
}

async function getUsers() {
  const url = `${baseURLApi}/users/users`;
  return await axios.get(url).then(response => response.data.data);
}

async function getUser(id) {
  const url = `${baseURLApi}/users/user`;
  return await axios.post(url, id).then(response => response.data);
}

async function createUser(data)
{
  const url = `${baseURLApi}/users/signUp`;
  return await axios.post(url, data).then(response => response.data);
}
async function register(data){
  const url =`${baseURLApi}/users/register`;
  return await axios.post(url,data).then(response=>response.data);
}



export {
  getUsers,
  getUser,
  createUser,
  register,
  getPolicies,
  getAccount
};