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
  description: "Gallery with my latest illustrations and digital artworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Niccolò Agnoletti" />
      <meta name="keywords" content="digital art, illustrations, graphics, gallery, blazardsky, niccolò agnoletti" />
      

      <body
        className={`${blackCasper.variable} ${geistMono.variable} antialiased  snap-mandatory snap-y`}
      >
        {children}
      </body>
    </html>
  );
}
