import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "utils/API/api";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (search?: string) => {
    try {
      const response = await api.get("/books", { params: { q: search } });
      console.log(response.data?.items, "api");
      return response.data?.items;
    } catch (e) {
      console.log(e, "error");
    }
  }
);
