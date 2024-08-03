import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="outline-none no-underline">
        <Image
          src="/media/logo.svg"
          alt="devlink logo"
          height={32}
          width={146}
          className="md:block hidden"
        />
        <Image
          src="/media/logo-mobile.svg"
          alt="devlink logo"
          height={32}
          width={32}
          className="md:hidden block"
        />
      </Link>
    </>
  );
};

export default Logo;
