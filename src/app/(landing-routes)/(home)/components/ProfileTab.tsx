import { Button } from "@/components/ui/button";
import { Image, Plus } from "lucide-react";
import React from "react";

const ProfileTab = () => {
  return (
    <>
      <div className="xl:basis-2/3 h-full w-full">
        <div className="w-full bg-white relative rounded-t-xl md:p-7 p-5">
          <h1 className="md:text-3xl text-2xl font-bold leading-10 text-darkGray">
            Profile Details
          </h1>
          <div className="text-base leading-6 font-normal text-customGray">
            Add your details to create a personal touch to your profile.
          </div>

          <div className="mt-10">
            <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:items-center p-5 rounded-xl bg-lightGray h-full">
              <div className="basis-1/3 h-full flex items-center">
                <p className="text-base text-customGray font-normal leading-6">
                  Profile picture
                </p>
              </div>

              <div className="basis-1/3">
                <input
                  type="file"
                  accept="image/jpg, image/png"
                  id="profileUpload"
                  className="hidden"
                />

                <label
                  htmlFor="profileUpload"
                  className="basis-1/3 outline-none cursor-pointer h-[193px] w-[193px] rounded-xl flex items-center flex-col justify-center bg-lightPurple gap-y-2 text-customPurple"
                >
                  <Image size={40} />
                  <div className="text-sm capitalize leading-6 flex gap-1 items-center">
                    <Plus size={14} />
                    <div>Upload image</div>
                  </div>
                </label>
              </div>

              <div className="basis-1/3 h-full flex items-center">
                <p className="text-sm text-customGray font-normal leading-4">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-lightGray h-full"></div>
          </div>
        </div>
        <div className="w-full bg-white relative rounded-b-xl border-t px-7 py-5">
          <div className="w-fit ml-auto">
            <Button variant={"default"}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
