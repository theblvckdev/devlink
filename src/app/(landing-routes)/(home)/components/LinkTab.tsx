import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddLinkGuide from "./widgets/AddLinkGuide";
import AddLinkCard from "./widgets/AddLinkCard";

interface LinkData {
  id: number;
  type: string;
  url: string;
}

const dummyLinkData: LinkData[] = [
  // {
  //   id: 1,
  //   type: "github",
  //   url: "/",
  // },
  // {
  //   id: 2,
  //   type: "linkedin",
  //   url: "/",
  // },
];

const LinkTab = () => {
  const [addedLinks, setAddedLinks] = useState<LinkData[]>([]);
  const [link, setLink] = useState<string>("");

  // Add new link logic
  const addNewLink = () => {
    const newLink = {
      id: Math.floor(Math.random() * 1000),
      type: "",
      url: "",
    };

    setAddedLinks((prevLinks) => [...prevLinks, newLink]);
  };

  // Handle change for input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    field: "type" | "url"
  ) => {
    const value = e.target.value;
    setAddedLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      )
    );
  };

  // delete link logic
  const deleteLink = (id: number) => {
    const updatedLinks = addedLinks.filter((data) => data.id !== id);

    setAddedLinks(updatedLinks);
    console.log(updatedLinks);
  };

  useEffect(() => {
    const getAddedLinksData = () => {
      setAddedLinks(dummyLinkData);
    };

    getAddedLinksData();
  }, []);

  return (
    <>
      <div className="xl:basis-3/5 w-full h-full">
        <div className="w-full bg-white h-full xl:max-h-[620px] xl:h-[620px] md:min-h-[620px] relative rounded-t-xl md:p-8 p-5">
          <h1 className="md:text-3xl text-2xl font-bold leading-10 text-darkGray">
            Customize your links
          </h1>
          <div className="text-base leading-6 font-normal text-customGray">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </div>

          <div className="mt-10 flex flex-col space-y-5">
            <Button
              variant={"outline"}
              onClick={addNewLink}
              className="w-full flex items-center gap-1 font-semibold"
            >
              <Plus size={13} />
              <div>Add new link</div>
            </Button>

            <div className="overflow-y-auto h-full max-h-[400px] link-wrapper">
              {addedLinks.length !== 0 ? (
                <div className="flex flex-col space-y-4">
                  {addedLinks.map((data, index) => {
                    const { id, type, url } = data;

                    return (
                      <AddLinkCard
                        index={index}
                        key={index}
                        linkUrl={url}
                        type={type}
                        onChangeUrl={(e) => handleChange(e, index, "url")}
                        deleteLinkFunc={() => deleteLink(id)}
                      />
                    );
                  })}
                </div>
              ) : (
                <AddLinkGuide />
              )}
            </div>
          </div>
        </div>
        <div className="w-full bg-white relative rounded-b-xl border-t px-8 py-5">
          <div className="w-fit ml-auto">
            <Button variant={"default"}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTab;
