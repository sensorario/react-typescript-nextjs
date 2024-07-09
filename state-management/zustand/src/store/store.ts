import { create } from "zustand";
import { combine } from "zustand/middleware";

type InitialState = {
  numero: number;
};

type SetStateType = {
  incrementa: () => void;
  reset: () => void;
};

const useStore = create(
  combine<InitialState, SetStateType>({ numero: 0 }, (set) => ({
    incrementa: () =>
      set((state: { numero: number }) => ({
        numero: state.numero + 1,
      })),

    reset: () => set(() => ({ numero: 0 })),
  }))
);

export default useStore;
