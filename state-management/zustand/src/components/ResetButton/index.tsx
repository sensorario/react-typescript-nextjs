import useStore from "../../store/store";

export function ResetButton() {
  const reset = useStore((state) => state.reset);

  return (
    <div className="card">
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default ResetButton;
