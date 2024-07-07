function App() {
  type Person = {
    name: string;
  };

  const names: Person[] = [
    { name: "Simone" },
    { name: "Lorenzo" },
    { name: "Ilaria" },
    { name: "Sofia" },
  ];

  const listITems = names.map((person: Person, index: number) => (
    <li key={index}>{person.name}</li>
  ));

  return (
    <div className="sensorario-container light">
      <h1>Rendering list</h1>
      <ul>{listITems}</ul>
    </div>
  );
}

export default App;
