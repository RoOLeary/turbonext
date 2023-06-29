import { Test } from "ui";
import { Suspense } from "react";
import { Analytics } from "../components/Analytics";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <>
          <Suspense>
            <Analytics />
          </Suspense>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
