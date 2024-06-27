import { useState } from "react";

type Props = {
  title: string;
  children: string;
  isActive: boolean;
  onActivation: () => void;
};

function ChildElement({ title, isActive, onActivation }: Props) {
  return (
    <>
      <h3>{title}</h3>
      {!isActive && <button onClick={onActivation}>attivami</button>}
      {isActive && <button disabled>sono attivo</button>}
    </>
  );
}

enum Titles {
  PRIMO = "primo",
  SECONDO = "secondo",
}

function App() {
  const [activeChild, setActiveChild] = useState<Titles>();
  return (
    <div className="sensorario-container light">
      <h2>Parent Element</h2>
      <ChildElement
        isActive={activeChild === Titles.PRIMO}
        onActivation={() => setActiveChild(Titles.PRIMO)}
        title={Titles.PRIMO}
      />
      <ChildElement
        isActive={activeChild === Titles.SECONDO}
        onActivation={() => setActiveChild(Titles.SECONDO)}
        title={Titles.SECONDO}
      />
    </div>
  );
}

export default App;
