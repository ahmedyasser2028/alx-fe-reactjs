import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API}/search/users`, {
      params: { q: query },
      headers: {
        // Authorization optional if you have API key
        // Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      },
    });
    return response.data.items; // قائمة المستخدمين
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};
