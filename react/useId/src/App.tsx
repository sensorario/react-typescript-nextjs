import { useId } from "react";

type Props = {
  title: string;
};

const UnComponente = ({ title }: Props) => {
  const id = useId();
  const uniqueId = `campo_di_input_${id}`;
  return (
    <div className="componente">
      <div className="riga">
        <label htmlFor={uniqueId}>{title}</label>
      </div>
      <div className="riga">
        <input className="campo_di_input" id={uniqueId} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="sensorario-container light">
      <h1>useId()</h1>
      <div className="flex">
        <UnComponente title={"Primo"} />
        <UnComponente title={"Secondo"} />
        <UnComponente title={"Terzo"} />
      </div>
    </div>
  );
}

export default App;
