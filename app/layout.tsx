import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/saga-blue/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calsoft-one",
  description: "next app with primereact and primeflex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <header className="flex align-items-center p-2">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Calsoft Logo"
                className="logo cursor-pointer"
                loading="lazy"
              />
            </Link>
          </header>
          {children}
          <footer className="flex flex-row-reverse p-3">
            <span className="text-sm text-color-secondary">
              &#169; Calsoft Inc. 2024
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
