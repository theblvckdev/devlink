"use client";

import React, { createContext, useState } from "react";

interface TabContextProps {
  value: string;
  setValue: (value: string) => void;
}

export const TabContext = createContext<TabContextProps | undefined>(undefined);

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<string>("links");

  return (
    <TabContext.Provider value={{ value, setValue }}>
      {children}
    </TabContext.Provider>
  );
};
