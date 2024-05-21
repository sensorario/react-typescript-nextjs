import "./App.css";

function App() {
  const nomi = ["Simone", "Lorenzo", "Ilaria", "Sofia"];
  type prop = { nome: string };
  const Item = ({ nome }: prop) => <li>{nome}</li>;
  const listItems = nomi.map((nome, index) => <Item key={index} nome={nome} />);
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
