import { reset } from "../../store/store";

export function ResetButton() {
  return (
    <div className="card">
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default ResetButton;
