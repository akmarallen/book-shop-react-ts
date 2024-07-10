import axios from "axios";

const apiKey = import.meta.env.VITE_APP_BOOK_API;
const baseURL = import.meta.env.VITE_APP_BASE_URL;

// export const fetchBestSellers = async () => {
//   const response = await axios.get(baseURL, {
//     params: {
//       q: "best seller",
//       maxResults: 10,
//     },
//     headers: {
//       Authorization: apiKey,
//     },
//   });
//   return response.data.items;
// };

export const api = axios.create({
  baseURL,
  headers: { Authorization: apiKey },
});

