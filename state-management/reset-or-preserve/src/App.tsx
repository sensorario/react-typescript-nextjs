import { useState } from "react";

type Props = {
  title: string;
};

function Bottone({ title }: Props) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      {title} counts {count}
    </button>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sensorario-container light">
      {isVisible ? (
        <Bottone title="primo" key="primo" />
      ) : (
        <Bottone title="secondo" key="secondo" />
      )}
      <input type="checkbox" onClick={onClick} /> mostra/nascondi
    </div>
  );
}

export default App;
