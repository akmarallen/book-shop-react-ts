import axios from "axios";

const apiKey = import.meta.env.VITE_APP_BOOK_API;
const baseURL = import.meta.env.VITE_APP_BASE_URL;
export const api = axios.create({
  baseURL,
  headers: { Authorization: apiKey },
});

