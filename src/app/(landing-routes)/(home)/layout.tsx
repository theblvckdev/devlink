import { TabProvider } from "@/context/tabContext";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <TabProvider>Home page</TabProvider>
    </>
  );
}
