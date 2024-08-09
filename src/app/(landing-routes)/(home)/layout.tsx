"use client";

import Navbar from "@/components/common/navbar";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";
import "./style.css";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="mt-4 h-full">{children}</div>
    </Provider>
  );
}
