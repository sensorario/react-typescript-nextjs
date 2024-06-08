import { useState, useTransition } from "react";
import "sensorario-design-system/style/index.css";

function Container() {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  function navigate(page: string) {
    startTransition(() => {
      setPage(page);
    });
  }

  const renderMenu = () => {
    return (
      <div className="menu">
        <button onClick={() => navigate("/")}>home</button>
        <button onClick={() => navigate("/blog")}>blog</button>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <>
        {renderMenu()}
        <div className="loading">loading ...</div>
      </>
    );
  };

  const renderPage = (page: string) => {
    if (page == "/") return <HomePage />;
    if (page == "/blog") return <BlogPage />;
  };

  if (isPending) return renderLoading();

  return (
    <>
      {renderMenu()}
      {renderPage(page)}
    </>
  );
}

function App() {
  return (
    <div className="sensorario-container">
      <h1>useTransition()</h1>
      <Container />
    </div>
  );
}

function delay(sec: number) {
  let startTime = performance.now();
  while (performance.now() - startTime < sec * 1000) {}
}

function HomePage() {
  delay(0.6);

  return (
    <div className="sensorario-container">
      <h2>Homepage</h2>
    </div>
  );
}

function BlogPage() {
  delay(0.5);

  return (
    <div className="sensorario-container">
      <h2>Blog!</h2>
    </div>
  );
}

export default App;
