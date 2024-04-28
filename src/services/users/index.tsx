import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  email: string;
  password: string;
}

interface UsersInfo {
  user: User | null;
  signin: (email: string, password: string) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useInfo = create<UsersInfo>()(
  persist(
    (set, get) => ({
      user: null,
      signin: (email, password) => {
        const newUser = { id: Date.now(), email, password };
        set({ user: newUser });
        return newUser;
      },
      login: async (email, password) => {
        return new Promise<boolean>((resolve) => {
          setTimeout(() => {
            const authenticated =
              email === "teste@email.com" && password === "123456";
            if (authenticated) {
              const currentUser = get().user;
              if (currentUser) {
                currentUser.email = email;
                currentUser.password = password;
                set({ user: currentUser });
              }
            }
            resolve(authenticated);
          }, 1000);
        });
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "userStore",
    }
  )
);

export default useInfo;
