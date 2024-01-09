export default async function MioComponente() {
  await fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return <div>qweweqwq</div>;
}
