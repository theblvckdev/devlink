import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeNavbar = () => {
  return (
    <header className="bg-transparent py-4 fixed top-0 left-0 right-0">
      <nav className="max-w-6xl  md:px-5 xl:px-0 px-3 mx-auto flex items-center flex-row justify-between">
        <div>
          <Link href={"/"} className="outline-none no-underline">
            <Image
              src="/media/logo.svg"
              alt="devlink logo"
              height={32}
              width={146}
            />
          </Link>
        </div>

        <div>
          <Link href={"/auth"} className="outline-none no-underline">
            <Button
              variant={"default"}
              className="outline-none rounded-xl text-white"
            >
              Get started
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
