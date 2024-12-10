import { create } from "zustand";
import { UserProfileType } from "@/schemas/user";

interface UserState {
  user: UserProfileType | null;
  setUser: (user: UserProfileType | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
