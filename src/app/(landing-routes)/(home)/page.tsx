"use client";

import React from "react";
import LinkTab from "./components/LinkTab";
import { useTab } from "@/hooks/useTab";
import ProfileTab from "./components/ProfileTab";

const Home = () => {
  const { value } = useTab();

  return (
    <>
      {value === "links" && <LinkTab />}
      {value === "profile" && <ProfileTab />}
    </>
  );
};

export default Home;
