import { useFormStatus } from "react-dom";

const Componente = () => {
  const { pending } = useFormStatus();
  return <button type="submit">FORM IS {pending || "NOT"} PENDING</button>;
};

function pausa(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const action = async () => {
  await pausa(2000);
};

function App() {
  return (
    <div className="sensorario-container light">
      <h2>useFormStatus()</h2>
      <form action={action}>
        <Componente />
      </form>
    </div>
  );
}

export default App;
