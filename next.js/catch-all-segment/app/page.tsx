import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home page</h1>
      <Link href="shop/maglietta/s/cotone">prodotto</Link>
    </div>
  );
}
