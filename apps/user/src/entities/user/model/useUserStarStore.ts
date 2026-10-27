import { create } from "zustand";

const INITIAL_STAR_COUNT = 2400;

interface UserStarState {
  starCount: number;
  setStarCount: (starCount: number) => void;
  spendStars: (amount: number) => boolean;
}

export const useUserStarStore = create<UserStarState>((set, get) => ({
  starCount: INITIAL_STAR_COUNT,
  setStarCount: (starCount) => set({ starCount }),
  spendStars: (amount) => {
    const { starCount } = get();

    if (starCount < amount) return false;

    set({ starCount: starCount - amount });
    return true;
  },
}));
