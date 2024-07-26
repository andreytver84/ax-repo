import { create } from "zustand";

export const useStore = create((set, get) => ({
  theme: "light",
  isLoggedIn: false,
  onToggleTheme: () => {
    get().theme === "light" ? set({ theme: "dark" }) : set({ theme: "light" });
    localStorage.setItem("theme", get().theme);
  },
  setTheme: (theme) => {
    set((state) => {
      return {
        ...state,
        theme: theme,
      };
    });
  },
  onLogin: () => {
    set((state) => {
      localStorage.setItem("isLoggedIn", "1");
      return { ...state, isLoggedIn: true };
    });
  },
  onLogout: () => {
    set((state) => {
      localStorage.removeItem("isLoggedIn");
      return { ...state, isLoggedIn: false };
    });
  },
}));
