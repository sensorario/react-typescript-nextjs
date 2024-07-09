import { create } from "zustand";

export const useStore = create(() => ({
  numero: 0,
  foo: {
    bar: {
      fizz: {
        buzz: {
          numero: 0,
        },
      },
    },
  },
}));

export const reset = () => {
  useStore.setState(() => ({
    numero: 0,
    foo: {
      bar: {
        fizz: {
          buzz: {
            numero: 0,
          },
        },
      },
    },
  }));
};

export default useStore;
