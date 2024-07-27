import { create } from "zustand";
import { combine } from "zustand/middleware";

type initial = {
  name: string;
};

type FooType = {
  fetchPerson: (id?: number | null) => void;
};

export const useStore = create(
  combine<initial, FooType>({ name: "" }, (set) => ({
    fetchPerson: async (id = 10) => {
      const request = await fetch(`https://swapi.dev/api/people/${id}`);
      const response = await request.json();
      console.log(response);
      set({ name: response.name });
    },
  }))
);

export default useStore;
