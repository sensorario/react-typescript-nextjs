import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Link from "next/link";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Route groups example",
  description: "An example of route groups usage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="primoLayout">
      <h2>(primo) layout</h2>
      <Suspense>{children}</Suspense>
    </div>
  );
}
