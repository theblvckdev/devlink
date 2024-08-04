"use client";

import React from "react";
import LinkTab from "./components/LinkTab";
import { useTab } from "@/hooks/useTab";
import ProfileTab from "./components/ProfileTab";
import MobileSimulator from "./components/widgets/MobileSimulator";

const Home = () => {
  const { value } = useTab();

  return (
    <>
      <div className="flex flex-row gap-4">
        <MobileSimulator />

        {value === "links" && <LinkTab />}
        {value === "profile" && <ProfileTab />}
      </div>
    </>
  );
};

export default Home;
