import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const AddLinks = () => {
  return (
    <div className="lg:basis-2/3 h-full">
      <div className="w-full bg-white relative rounded-t-xl p-7">
        <h1 className="text-3xl font-bold leading-10 text-darkGray">
          Customize your links
        </h1>
        <div className="text-base leading-6 font-normal text-customGray">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </div>

        <div className="mt-10 flex flex-col space-y-5">
          <Button
            variant={"outline"}
            className="w-full flex items-center gap-1 font-semibold"
          >
            <Plus size={13} />
            <div>Add new link</div>
          </Button>

          <div className="rounded-xl bg-lightGray p-10 flex flex-col items-center space-y-6">
            <div>
              <Image
                src="/media/illustration.svg"
                height={160}
                width={250}
                alt="tablet illustration"
              />
            </div>

            <h1 className="text-3xl font-bold leading-10 text-darkGray text-center">
              Let’s get you started
            </h1>

            <p className="text-center font-normal text-base leading-6 text-customGray w-[488px] mx-auto">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white relative rounded-b-xl border-t px-7 py-5">
        <div className="w-fit ml-auto">
          <Button variant={"default"}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AddLinks;
