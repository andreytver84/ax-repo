import { create } from "zustand";
import { api } from "../api/axios";

export const useApiStore = create((set, get) => ({
  postsData: [],
  fetchPosts: async () => {
    const data = await api.get().then((response) => response.data);
    set((state) => {
      return { ...state, postsData: [...data] };
    });
  },
  getPosts: () => {
    return get().postsData;
  },
}));
