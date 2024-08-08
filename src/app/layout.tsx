import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "@next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const instrumentalSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devlink - Share all your social links with one link.",
  description: "Easy way to share all your social links with one link.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentalSans.className} bg-lightGray`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
