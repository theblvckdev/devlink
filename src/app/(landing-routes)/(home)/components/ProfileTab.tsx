import { Button } from "@/components/ui/button";
import { Image as ImageIcon, LoaderCircle, Plus } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ProfileInputs from "./widgets/ProfileInputs";
import Image from "next/image";
import { toast } from "@/components/ui/use-toast";

interface FormState {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const ProfileTab = () => {
  const [formState, setFormState] = useState<FormState>({});
  const [validationErrors, setValidationErrors] = useState<FormState>({});
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined
  );
  const [imageUploadLoading, setImageUploadLoading] = useState<boolean>(false);
  const [imageError, setImageError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setValidationErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // validate form inputes
  const validateForm = (): boolean => {
    const errors: FormState = {};

    if (!formState.firstName) errors.firstName = "Can't be empty";
    if (!formState.lastName) errors.lastName = "Can't be empty";
    if (!formState.email) {
      errors.email = "Can't be empty";
    } else if (!isValidEmail(formState.email)) {
      errors.email = "Invalid email format";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProfileImageChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setImageUploadLoading(true);
    setImageError("");

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      // Validate file type
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setImageError("Invalid file format. Please use PNG or JPG.");
        setImageUploadLoading(false);
        return;
      }

      // Validate image dimensions
      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        const { width, height } = image;
        if (width > 1024 || height > 1024) {
          setImageError("Image dimensions must be below 1024x1024px.");
          setImageUploadLoading(false);
          return;
        }

        const imageUrl = URL.createObjectURL(file);

        // Simulate image upload delay
        setTimeout(() => {
          setProfileImage(imageUrl);
          setImageUploadLoading(false);
        }, 3000);
      };
    } else {
      setImageUploadLoading(false);
    }
  };

  const handleProfileUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formState.email, formState.firstName, formState.lastName);
    }
  };

  // show toast if image upload error
  useEffect(() => {
    const showToastAlert = () => {
      if (imageError) {
        toast({
          title: "Profile image upload error",
          description: imageError,
        });
      }
    };

    showToastAlert();
  }, [imageError]);

  return (
    <>
      <form
        onSubmit={handleProfileUpdate}
        className="xl:basis-3/5 h-full w-full"
      >
        <div className="w-full bg-white relative rounded-t-xl md:p-7 md:pb-10 p-5">
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
                  accept="image/jpeg, image/png"
                  id="profileUpload"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />

                <label
                  htmlFor="profileUpload"
                  className="basis-1/3 outline-none cursor-pointer h-[193px] w-[193px] rounded-xl flex items-center flex-col justify-center bg-lightPurple gap-y-2 text-customPurple overflow-hidden relative group"
                >
                  {imageUploadLoading ? (
                    <div className="h-full w-full flex flex-col items-center justify-center">
                      <LoaderCircle
                        size={30}
                        className="text-customGray animate-spin"
                      />
                      <div className="text-xs text-center text-customGray mt-2">
                        Loading image...
                      </div>
                    </div>
                  ) : profileImage ? (
                    <>
                      <Image
                        src={profileImage}
                        width={100}
                        height={100}
                        alt="user profile image"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute h-full w-full duration-300 ease-in opacity-0 bg-black group-hover:opacity-100 bg-opacity-15 text-white flex items-center justify-center flex-col">
                        <ImageIcon size={40} />
                        <div className="text-sm capitalize leading-6">
                          Change image
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={40} />
                      <div className="text-sm capitalize leading-6 flex gap-1 items-center">
                        <Plus size={14} />
                        <div>Upload image</div>
                      </div>
                    </>
                  )}
                </label>
              </div>

              <div className="basis-1/3 h-full flex items-center">
                <p className="text-sm text-customGray font-normal leading-4">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-lightGray h-full">
              <div className="flex flex-col space-y-4">
                <ProfileInputs
                  inputId="firstName"
                  label="First name*"
                  placeholder="e.g John"
                  value={formState.firstName || ""}
                  onChange={handleChange}
                  errorMessage={validationErrors.firstName}
                  inputType="text"
                  required={validationErrors.firstName ? true : false}
                />

                <ProfileInputs
                  inputId="lastName"
                  label="Last name*"
                  placeholder="e.g Appleseed"
                  value={formState.lastName || ""}
                  errorMessage={validationErrors.lastName}
                  onChange={handleChange}
                  inputType="text"
                  required={validationErrors.lastName ? true : false}
                />

                <ProfileInputs
                  inputId="email"
                  label="Email"
                  placeholder="e.g email@example.com"
                  value={formState.email || ""}
                  onChange={handleChange}
                  errorMessage={validationErrors.email}
                  inputType="email"
                  required={validationErrors.email ? true : false}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white relative rounded-b-xl border-t px-7 py-5">
          <div className="w-fit ml-auto">
            <Button variant={"default"}>Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfileTab;
