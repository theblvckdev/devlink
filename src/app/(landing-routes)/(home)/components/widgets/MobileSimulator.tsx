import LinkBrick from "@/components/common/LinkBrick";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import React from "react";

const MobileSimulator = () => {
  return (
    <div className="basis-1/3 bg-white relative rounded-xl h-full xl:flex justify-center items-center p-14 hidden">
      <Image
        src="/media/mobile-preview.svg"
        alt="mobile preview simulator"
        height={250}
        width={287}
      />

      <div className="absolute rounded-[35px] overflow-hidden h-[500px] w-[250px] flex items-center flex-col justify-center">
        <div className="flex gap-2 flex-col items-center mt-10">
          <div className="h-24 w-24 bg-skeleton rounded-full"></div>
          <div className="h-3 w-40 bg-skeleton rounded-full"></div>
          <div className="h-2 w-16 bg-skeleton rounded-full"></div>
        </div>

        <ScrollArea className="mt-10 overflow-y-auto h-[300px] space-y-3 simulator-scroller">
          <LinkBrick />
          <LinkBrick />
          <LinkBrick />
          <LinkBrick />
          <LinkBrick />
        </ScrollArea>
      </div>
    </div>
  );
};

export default MobileSimulator;
