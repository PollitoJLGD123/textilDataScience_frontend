import axios from 'axios';
import { getAuthCookie, removeAuthCookie } from '../cookies/cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL || "http://localhost:4002/api",
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined' && config.headers) {
    const token = getAuthCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const isLogout = error.config.url?.includes('auth/logout');

      if (!isLogout && typeof window !== 'undefined') {
        removeAuthCookie();
      }
    }
    return Promise.reject(error);
  }
);

export default api;
