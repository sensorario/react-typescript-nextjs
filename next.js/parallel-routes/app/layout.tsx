import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Layout principale</h1>
        <div className="main-layout">{children}</div>
      </body>
    </html>
  );
}
