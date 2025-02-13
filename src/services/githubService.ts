import axios from 'axios';
import { GITHUB_API_URL, Errors } from './utils.ts';

export const fetchUser = async (username: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(Errors.NotFound);
  }
};

export const fetchUserRepos = async (username: string) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(Errors.NoRepos);
  }
};
