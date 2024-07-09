// import nestedImmerInc from "../../store/nestedImmerInc";
import { nestedInc } from "../../store/nestedInc";
import useStore from "../../store/store";

export const NestedValue = () => {
  const numero = useStore((state) => state.foo.bar.fizz.buzz.numero);

  return (
    <>
      <button onClick={nestedInc}>nestedInc {numero}</button>
      {/* <button onClick={nestedImmerInc}>nestedInc {numero}</button> */}
    </>
  );
};

export default NestedValue;
