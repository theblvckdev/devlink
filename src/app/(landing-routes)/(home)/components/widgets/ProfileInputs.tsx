import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";

interface InputProps {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  inputType: string;
  required?: boolean;
  errorMessage?: string;
}

const ProfileInputs = ({
  inputId,
  label,
  onChange,
  value,
  placeholder,
  inputType,
  required,
  errorMessage,
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
          <div className="relative w-full h-full">
            <Input
              value={value}
              id={inputId}
              onChange={onChange}
              placeholder={placeholder}
              className={`w-full md:min-w-[432px] text-base font-normal leading-6 py-3.5 px-4 rounded-lg ${
                required
                  ? "ring-1 ring-customRed"
                  : "focus:shadow-spread focus:ring-1 duration-300 ease-in focus:ring-customPurple"
              }`}
              type={inputType}
              name={inputId}
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

export default ProfileInputs;
