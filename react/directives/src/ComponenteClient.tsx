"use client";

import { useEffect, useState } from "react";

function ComponenteClient() {
  const [counter, setCounter] = useState(0);
  const adesso = new Date();
  const [data, setData] = useState(
    `${adesso.getHours()}:${adesso.getMinutes()}:${adesso.getSeconds()}`
  );

  useEffect(() => {
    setData(
      `${adesso.getHours()}:${adesso.getMinutes()}:${adesso.getSeconds()}`
    );
  }, [counter]);

  return (
    <>
      <div className="orario-client">orario client: {data}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        aggiorna stato
      </button>
    </>
  );
}

export default ComponenteClient;
