import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const blackCasper = localFont({
  src: "./fonts/blackcasper.woff",
  variable: "--font-blackcasper",
  weight: "400",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Galleria",
  description: "Gallery with my latest works in illustration and design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${blackCasper.variable} ${geistMono.variable} antialiased  snap-mandatory snap-y`}
      >
        {children}
      </body>
    </html>
  );
}
