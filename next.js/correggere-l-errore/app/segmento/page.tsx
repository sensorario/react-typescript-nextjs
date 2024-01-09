"use client";

import React, { useState } from "react";
import Error from "./error";

const App = () => {
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>Pagina di esempio</h1>

      <button
        onClick={() =>
          setError({
            message: "Errore di esempio",
          })
        }
      >
        Genera errore
      </button>

      {error && (
        <Error
          error={error}
          reset={() => {
            console.log("adesso resetto cose... ");
          }}
        />
      )}
    </div>
  );
};

export default App;
