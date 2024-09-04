import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GoogleAuthButton = () => {
  return (
    <>
      <Button className="w-full bg-transparent ring-1 text-gray-900 hover:text-white ease-in duration-300 ring-gray-300 rounded-md flex items-center gap-2">
        <Image
          src="/media/google-logo.svg"
          alt="Google logo"
          className="h-6 w-6"
          width={100}
          height={100}
        />
        Continue with Google
      </Button>
    </>
  );
};

export default GoogleAuthButton;
