import { useState, useTransition } from "react";
import "sensorario-design-system/style/index.css";

function delay(sec: number) {
  let startTime = performance.now();
  while (performance.now() - startTime < sec * 1000) {}
}

const Home = () => {
  delay(0.6);

  return (
    <div className="componente-home">
      <h1>Homepage</h1>
    </div>
  );
};

const Blog = () => {
  delay(1);

  return (
    <div className="componente-home">
      <h1>Il mio blog</h1>
      <ul>
        <li>Post #1</li>
        <li>Post #2</li>
        <li>Post #3</li>
      </ul>
    </div>
  );
};

function App() {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(page: string) {
    startTransition(() => {
      setPage(page);
    });
  }

  return (
    <div className="sensorario-container light">
      <h1>useTransition()</h1>
      <div className="button-menu">
        <div className="pagina-corrente">pagina corrente: {page}</div>
        <button disabled={isPending} onClick={() => navigate("/")}>
          home
        </button>
        <button disabled={isPending} onClick={() => navigate("/blog")}>
          blog
        </button>
        <div className="pagina">
          {isPending && "loading ..."}
          {page === "/" && <Home />}
          {page === "/blog" && <Blog />}
        </div>
      </div>
    </div>
  );
}

export default App;
