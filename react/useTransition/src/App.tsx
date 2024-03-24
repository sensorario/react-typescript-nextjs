import { useState } from "react";

function App() {
  const [page, setPage] = useState("/");

  return (
    <>
      <h1>useTransaction()</h1>

      <button onClick={() => setPage("/")}>home</button>
      <button onClick={() => setPage("/blog")}>blog</button>

      {page === "/" && <HomePage />}
      {page === "/blog" && <BlogPage />}
    </>
  );
}

function HomePage() {
  return (
    <>
      <h2>Homepage</h2>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <h2>Blog!</h2>
    </>
  );
}

export default App;
