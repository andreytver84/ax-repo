import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      isLoggedIn: false,
      onToggleTheme: () => {
        get().theme === "light"
          ? set({ theme: "dark" })
          : set({ theme: "light" });
        //localStorage.setItem("theme", get().theme);
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
          //localStorage.setItem("isLoggedIn", "1");
          return { ...state, isLoggedIn: true };
        });
      },
      onLogout: () => {
        set((state) => {
          //localStorage.removeItem("isLoggedIn");
          return { ...state, isLoggedIn: false };
        });
      },
    }),
    {
      name: "zustand-storage", // name of the item in the storage (must be unique)
      getStorage: () => localStorage,
    }
  )
);
