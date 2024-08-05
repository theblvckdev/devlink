import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";

interface InputProps {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  inputType: string;
}

const ProfileInputs = ({
  inputId,
  label,
  onChange,
  value,
  placeholder,
  inputType,
}: InputProps) => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:items-center gap-1">
        <div className="md:mr-auto">
          <label
            htmlFor={inputId}
            className="text-base font-normal leading-6 text-customGray"
          >
            {label}
          </label>
        </div>

        <div>
          <Input
            value={value}
            id={inputId}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full md:min-w-[432px] text-base font-normal leading-6 py-3.5 px-4 rounded-lg"
            type={inputType}
            name={inputId}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileInputs;
