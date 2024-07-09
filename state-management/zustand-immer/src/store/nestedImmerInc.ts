import { produce } from "immer";
import useStore from "./store";

export const nestedImmerInc = () => {
  useStore.setState(
    produce((state) => {
      ++state.foo.bar.fizz.buzz.numero;
    })
  );
};

export default nestedImmerInc;
