import Link from "next/link";
import { Suspense } from "react";
import MioComponente from "./MioComponente";

export default function Home() {
  return (
    <div className="loading-ui-and-streaming">
      <Link href="dashboard">contenuto lento</Link>
      <Suspense fallback="loading ..... ">
        <MioComponente />
      </Suspense>
    </div>
  );
}
