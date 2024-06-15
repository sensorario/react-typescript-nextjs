import { useEffect, useState } from "react";

function Bottone() {
  const [numeroDiClick, setNumeroDiClick] = useState<number>(0);
  const [mostra, setMostra] = useState(true);

  useEffect(() => {
    if (numeroDiClick > 10) {
      setMostra(false);
    }
  }, [numeroDiClick]);

  return (
    <>
      numeor di click: {numeroDiClick}
      {mostra && (
        <button onClick={() => setNumeroDiClick(numeroDiClick + 1)}>
          bottone
        </button>
      )}
    </>
  );
}

export default Bottone;
