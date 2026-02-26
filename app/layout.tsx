import "./globals.css";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <head>
        <title>Wojtek PF Szymanski</title>
        <meta
          name="description"
          content="Produkcja filmowa i motion design — Dobro Media"
        />
        <link rel="icon" href="/dobro-media.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}