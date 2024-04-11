import { useState } from "react";

function Sensorario() {
  const [text, setText] = useState("press me");

  return (
    <>
      Simone Gentili
      <button
        onClick={() => {
          setText((prevText) =>
            prevText === "press me" ? "premimi" : "press me"
          );
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Sensorario;
