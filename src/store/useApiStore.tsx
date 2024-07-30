import { create } from "zustand";
import { api } from "../api/axios";

export const useApiStore = create((set, get) => ({
  postsData: [],
  fetchPosts: async () => {
    api.interceptors.response.use((response) => response);
    const data = await api.get().then((response) => response.data);
    //console.log(data);
    set({ postsData: data });
  },
}));
