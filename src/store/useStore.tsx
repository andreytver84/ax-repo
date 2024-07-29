import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      isLoggedIn: false,
      onToggleTheme: () => {
        get().theme === "light"
          ? set({ theme: "dark" })
          : set({ theme: "light" });
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
          return { ...state, isLoggedIn: true };
        });
      },
      onLogout: () => {
        set((state) => {
          return { ...state, isLoggedIn: false };
        });
      },
    }),
    {
      name: "zustStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
