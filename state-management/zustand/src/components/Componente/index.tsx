import useStore from "../../store/store";

export default function Componente() {
  const incrementa = useStore((state) => state.incrementa);
  const numero = useStore((state) => state.numero);

  return (
    <div className="card">
      <button onClick={incrementa}>incrementa {numero}</button>
    </div>
  );
}
