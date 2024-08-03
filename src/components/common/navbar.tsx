import React from "react";
import Logo from "./logo";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { TabsTrigger } from "../ui/tabs";
import { CircleUserRound, Link } from "lucide-react";
import { useTabContext } from "@/hooks/useTabContext";

const Navbar = () => {
  const { value, setValue } = useTabContext();

  return (
    <>
      <header>
        <nav className="bg-white rounded-xl p-4 flex items-center flex-row justify-between">
          <Logo />

          <Tabs className="w-fit">
            <TabsList className="flex flex-row gap-2">
              <TabsTrigger
                onClick={() => setValue("links")}
                value="links"
                className={`bg-transparent outline-none flex items-center gap-2 text-base font-semibold duration-300 ease-in hover:text-customPurple rounded-md ${
                  value === "links"
                    ? "bg-lightPurple text-customPurple"
                    : "bg-transparent text-customGray"
                }`}
              >
                <Link size={16} />
                <div>Links</div>
              </TabsTrigger>

              <TabsTrigger
                value="profile"
                onClick={() => setValue("profile")}
                className={`bg-transparent outline-none flex items-center gap-2 text-base font-semibold duration-300 ease-in hover:text-customPurple rounded-md ${
                  value === "profile"
                    ? "bg-lightPurple text-customPurple"
                    : "bg-transparent text-customGray"
                }`}
              >
                <CircleUserRound size={16} />
                <div>Profile Details</div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
