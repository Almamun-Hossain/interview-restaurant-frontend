"use client";
import Head from "next/head";
import Providers from "./_utils/Providers";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Curry Leaves</title>
        <meta name="description" content="Explore delicious foods" />
      </Head>
        <Providers>
          <body className="bg-gray-300">{children}</body>
        </Providers>
    </html>
  );
}
