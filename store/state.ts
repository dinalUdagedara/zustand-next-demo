import { create } from "zustand";

interface StoreState {
  count: number;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
}));

export default useStore;
