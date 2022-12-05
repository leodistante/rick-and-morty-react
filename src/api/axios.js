import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/"
});

export const getCharactersPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/?page=${pageParam}`, options);
  return response.data;
};
