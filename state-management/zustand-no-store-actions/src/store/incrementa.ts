import useStore from "./store";

export const incrementa = () => {
  useStore.setState((state) => ({
    numero: state.numero + 1,
  }));
};
