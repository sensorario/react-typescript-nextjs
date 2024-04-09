"use server";

import { useState } from "react";

function ComponenteServer() {
  const now = new Date();
  const data = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="orario-client">orario client: {data}</div>;
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </>
  );
}

export default ComponenteServer;
