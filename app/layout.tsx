import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <title>Wojtek PF Szymanski</title>
        <meta name="description" content="Produkcja filmowa i motion design — Dobro Media" />
        <link rel="icon" href="/dobro-media.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
