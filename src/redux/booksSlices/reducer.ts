import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@utils/API/api";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (search?: string) => {
    try {
      const response = await api.get("/volumes", { params: { q: search } });
      return response.data?.items;
    } catch (e) {
      return e;
      
    }
  }
);
