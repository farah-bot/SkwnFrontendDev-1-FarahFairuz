import axios from 'axios';

const API_URL = 'https://682b7decd29df7a95be3973f.mockapi.io/api/v1';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/furniture`);
  return response.data;
};

export const fetchFeaturedProduct = async () => {
  const products = await fetchProducts();
  return products.find((item) => item.isFeatured);
};

export const fetchBestSellers = async () => {
  const products = await fetchProducts();
  return products.filter((item) => item.isBestSeller);
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const subscribeNewsletter = async (email) => {
  const response = await axios.post(`${API_URL}/newsletter`, { email });
  return response.data;
};
