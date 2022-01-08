/*import axios from 'axios';

const getMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  params: {
    key: '597522cf6881ad12863cfcef806a7c6d',
    per_page: 12,
  },
});

export async function fetchMovies(page = 1) {
  const params = { page };
  try {
    const { data } = await getImages('', { params });
    return data;
  } catch (error) {
    alert(`Нет результатов по запросу`);
  }
}*/
