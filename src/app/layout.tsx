import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const instrumental_sans = Instrument_Sans({ subsets: ["latin"] });

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
      <body className={`${instrumental_sans.className} bg-white`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
