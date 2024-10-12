import Image from "next/image";
import localFont from "next/font/local";
import { Children } from "react";
import { Html } from "next/document";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({children}) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
        </body>
    </html>
  );
}
