import { useState } from "react";

type Props = {
  attribute: string;
  children: JSX.Element;
};

const Esempio = (props: Props) => {
  return (
    <div className="esempio">
      <div className="attribute">{props.attribute}</div>
      <div className="chidren">{props.children}</div>
    </div>
  );
};

function App() {
  return (
    <div className="sensorario-container light">
      <h1>props.children</h1>
      <Esempio attribute="foo">
        <div className="bar">content...</div>
      </Esempio>
    </div>
  );
}

export default App;
