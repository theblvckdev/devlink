import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <section className="h-screen w-screen flex items-center">
      <div className="max-w-6xl h-full mx-auto md:px-5 xl:px-0 px-3">
        <div className="flex h-full md:flex-row flex-col md:items-center md:justify-normal justify-center">
          <div className="basis-3/5 flex flex-col justify-center h-full">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold">
              Your Hub for <br /> Developer Networking and Growth
            </h1>

            <p className="mt-3 text-gray-400 text-lg leading-tight">
              Connect with like-minded professionals, enhance your skills,{" "}
              <br className="lg:block hidden" /> and build meaningful projects
              together.
            </p>

            <Link href={"/auth"} className="outline-none no-underline mt-5">
              <Button
                variant={"default"}
                className="outline-none rounded-xl text-white"
              >
                Get started
              </Button>
            </Link>
          </div>
          <div className="basis-2/5 md:flex hidden pt-8 justify-center items-center">
            <Image
              src="/mockup.svg"
              width={100}
              height={100}
              className="object-cover lg:w-[230px] md:w-[200px]"
              alt="mockup image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
