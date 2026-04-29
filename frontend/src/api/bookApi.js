import axios from "axios";

const rawApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const booksBaseUrl = rawApiUrl.replace(/\/$/, "").endsWith("/books")
  ? rawApiUrl.replace(/\/$/, "")
  : `${rawApiUrl.replace(/\/$/, "")}/books`;

const API = axios.create({
  baseURL: booksBaseUrl,
});

export const getBooks = () => API.get("/");
export const getBookById = (id) => API.get(`/${id}`);
export const createBook = (bookData) => API.post("/", bookData);
export const updateBook = (id, bookData) => API.put(`/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/${id}`);

export default API;
