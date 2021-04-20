import { api } from './api';

export const getUserDetails = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserRepos = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
  } catch (error) {
    return error;
  }
};
