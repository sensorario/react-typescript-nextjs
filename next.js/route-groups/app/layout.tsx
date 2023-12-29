import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={inter.className}>
        <h2>Root layout</h2>

        <ul>
          <li>
            <Link href="/" prefetch={false}>
              home
            </Link>
          </li>
          <li>
            <Link href="/blog" prefetch={false}>
              blog
            </Link>
          </li>
          <li>
            <Link href="/contatti" prefetch={false}>
              contatti
            </Link>
          </li>
        </ul>

        <div className="container">{children}</div>
      </body>
    </html>
  );
}
