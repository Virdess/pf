import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const getCategories = async () => {
  const response = await axios.get(`${baseUrl}/products/categories`);
  return response.data;
};

export const getProductsInCategory = async () => {
  const response = await axios.get(`${baseUrl}/products/category/fragrances`);
  return response.data.products;
};

export const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/products/category/fragrances`);
  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
};
