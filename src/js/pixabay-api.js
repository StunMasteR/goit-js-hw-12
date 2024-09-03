import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchQuery, page) => {
  const axiosOptions = {
    params: {
      key: '45783365-0aa71d87ed7f50a45516fb3bf',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  return axios.get('', axiosOptions);
};