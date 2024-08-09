import Image from "next/image";

const AddLinkGuide = () => {
  return (
    <>
      <div className="rounded-xl bg-lightGray md:p-10 p-5 flex flex-col items-center md:space-y-6 space-y-4">
        <div>
          <Image
            src="/media/illustration.svg"
            height={160}
            width={250}
            className="md:block hidden"
            alt="tablet illustration"
          />

          <Image
            src="/media/illustration.svg"
            height={160}
            width={150}
            className="md:hidden block"
            alt="tablet illustration"
          />
        </div>

        <h1 className="md:text-3xl text-2xl font-bold leading-10 text-darkGray text-center">
          Let’s get you started
        </h1>

        <p className="text-center font-normal text-base leading-6 text-customGray md:w-[488px] mx-auto">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </>
  );
};

export default AddLinkGuide;
