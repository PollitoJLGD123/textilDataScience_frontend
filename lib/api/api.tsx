import api from './config';

export const getRequest = async (url:string, params = {}, config = {}) => {
  try {
    const response = await api.get(url, {
      params,
      ...config,
    });
    return response.data;
  } catch (error) {
    handleApiError(error as ApiError);
  }
};

export const postRequest = async (url: string, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, {
      ...config,
    });
    return response.data;
  } catch (error) {
    handleApiError(error as ApiError);
  }
};


export const putRequest = async (url: string, data = {}, config = {}) => {
  try {
    const response = await api.put(url, data, {
      ...config,
    });
    return response.data;
  } catch (error) {
    handleApiError(error as ApiError);
  }
};

export const deleteRequest = async (url: string , config = {}) => {
  try {
    const response = await api.delete(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    handleApiError(error as ApiError);
  }
};

interface ApiErrorResponse {
  status: number;
  data: unknown;
}

interface ApiError extends Error {
  response?: ApiErrorResponse;
}

export const handleApiError = (error: ApiError): never => {
  if (!error.response) {
    throw new Error('Network error - Please check your internet connection');
  }

  const { status, data } = error.response;

  if (status === 401 || status === 403) {
    localStorage.removeItem('token'); 
    window.location.href = '/login';
    throw new Error('Authentication required. Please login again.');
  }

  if (status === 404) {
    throw new Error('Data not found. Please check your request.');
  }

  if (status >= 500) {
    throw new Error('Server error. Please try again later.');
  }

  if (status >= 400) {
    const errorMessage = typeof data === 'string' 
      ? data 
      : data instanceof Object 
        ? JSON.stringify(data)
        : 'An error occurred';
    throw new Error(errorMessage);
  }

  throw new Error('An unexpected error occurred');
};