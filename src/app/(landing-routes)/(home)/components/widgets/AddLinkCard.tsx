import { GripHorizontal, Link } from "lucide-react";
import React, { ChangeEvent } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ComponentProps {
  index: number;
  linkUrl: string;
  type: string;
  deleteLinkFunc: (id: number) => void;
  required?: boolean;
  errorMessage?: string;
  onChangeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AddLinkCard = ({
  deleteLinkFunc,
  index,
  linkUrl,
  type,
  errorMessage,
  required,
  onChangeUrl,
}: ComponentProps) => {
  return (
    <>
      <div className="p-4 bg-lightGray rounded-xl">
        <div className="flex items-center flex-row">
          <div className="mr-auto">
            <div className="flex flex-row items-center gap-1">
              <button className="outline-none text-customGray cursor-move">
                <GripHorizontal size={20} />
              </button>

              <div className="text-base text-customGray font-semibold leading-6">
                Link #{index + 1}
              </div>
            </div>
          </div>

          <div>
            <button
              className="outline-none bg-transparent text-base leading-6 text-customGray capitalize"
              onClick={() => deleteLinkFunc(index)}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="mt-2">
          <Select>
            <label
              htmlFor={`selectLink${index}`}
              className="text-xs font-normal leading-4 text-darkGray"
            >
              Platform
            </label>
            <SelectTrigger
              id={`selectLink${index}`}
              className="w-full bg-white py-3 px-4 rounded-lg border border-customBorder"
            >
              <SelectValue placeholder="Link Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="github">GitHub</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-2">
          <label
            htmlFor={`inputLink${index}`}
            className="text-xs font-normal leading-4 text-darkGray"
          >
            Link
          </label>

          <div className="relative w-full h-full">
            <div className="absolute left-0 top-[50%] -translate-y-[50%] text-customGray ml-4">
              <Link size={14} />
            </div>
            <Input
              id={`inputLink${index}`}
              value={linkUrl}
              onChange={onChangeUrl}
              placeholder="e.g. https://www.yourline.com/john-doe"
              className={`w-full md:min-w-[432px] text-base font-normal leading-6 py-3.5 px-4 pl-9 rounded-lg placeholder:text-gray-400 ${
                required
                  ? "ring-1 ring-customRed"
                  : "focus:shadow-spread focus:ring-1 duration-300 ease-in focus:ring-customPurple"
              }`}
              type="url"
            />

            {errorMessage && (
              <div className="absolute right-0 mr-5 h-fit w-fit top-[50%] -translate-y-[50%] text-sm text-customRed">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLinkCard;
