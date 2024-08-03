"use client";

import React from "react";
import Logo from "./logo";
import { CircleUserRound, Eye, Link } from "lucide-react";
import { useTab } from "@/hooks/useTab";
import { Button } from "../ui/button";

const Navbar = () => {
  const { value, setTabValue } = useTab();

  return (
    <>
      <header>
        <nav className="bg-white rounded-xl p-4 flex items-center flex-row justify-between">
          <Logo />

          <div className="flex flex-row gap-3">
            <button
              onClick={() => setTabValue("links")}
              value="links"
              className={`py-2 px-3 outline-none flex items-center gap-2 text-sm font-semibold duration-300 ease-in hover:text-customPurple rounded-md ${
                value === "links"
                  ? "bg-lightPurple text-customPurple"
                  : "bg-transparent text-customGray"
              }`}
            >
              <Link size={16} />
              <div className="md:block hidden">Links</div>
            </button>

            <button
              value="profile"
              onClick={() => setTabValue("profile")}
              className={`py-2 px-3 outline-none flex items-center gap-2 text-sm font-semibold duration-300 ease-in hover:text-customPurple rounded-md ${
                value === "profile"
                  ? "bg-lightPurple text-customPurple"
                  : "bg-transparent text-customGray"
              }`}
            >
              <CircleUserRound size={16} />
              <div className="md:block hidden">Profile Details</div>
            </button>
          </div>

          <div>
            <Button variant={"outline"} className="md:block hidden rounded-lg">
              Preview
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="md:hidden block rounded-lg"
            >
              <Eye size={16} />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
