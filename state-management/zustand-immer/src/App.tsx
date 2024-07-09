import Componente from "./components/Componente";
import NestedValue from "./components/NestedValue";
import ResetButton from "./components/ResetButton";

function App() {
  return (
    <div className="sensorario-container light">
      <h1>Zustand</h1>
      <Componente />
      <ResetButton />
      <NestedValue />
    </div>
  );
}

export default App;
