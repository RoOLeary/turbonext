import { Suspense } from 'react';
import { Analytics } from "../components/Analytics";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Analytics />
          <Header />
          <Hero />
          {children}
        </>
      </body>
    </html>
  );
}
