import useStore from "./store";

export const nestedInc = () => {
  useStore.setState((state) => ({
    numero: state.numero,
    foo: {
      ...state.foo,
      bar: {
        ...state.foo.bar,
        fizz: {
          ...state.foo.bar.fizz,
          buzz: {
            ...state.foo.bar.fizz.buzz,
            numero: state.foo.bar.fizz.buzz.numero + 1,
          },
        },
      },
    },
  }));
};
