import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="p-4 bg-lightGray min-h-screen h-full">{children}</main>
  );
}
