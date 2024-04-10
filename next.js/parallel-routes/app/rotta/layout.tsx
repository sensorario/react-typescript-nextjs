export default function RootLayout({
  children,
  primo,
  secondo,
}: Readonly<{
  children: React.ReactNode;
  primo: React.ReactNode;
  secondo: React.ReactNode;
}>) {
  return (
    <>
      <h2>Rotta layout</h2>
      <div className="rotta-container">
        <div className="primo-slot">{primo}</div>
        <div className="secondo-slog">{secondo}</div>
        <div className="contenuto-normale">{children}</div>
      </div>
    </>
  );
}
