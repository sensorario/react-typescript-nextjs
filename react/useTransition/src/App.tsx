import { useState, useTransition } from "react";

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
    <>
      <h1>useTransaction()</h1>
      <Container />
    </>
  );
}

function delay(sec: number) {
  let startTime = performance.now();
  while (performance.now() - startTime < sec * 1000) {}
}

function HomePage() {
  delay(0.6);

  return (
    <>
      <h2>Homepage</h2>
    </>
  );
}

function BlogPage() {
  delay(0.5);

  return (
    <>
      <h2>Blog!</h2>
    </>
  );
}

export default App;
