import React from "react";
import MobileSimulator from "./widgets/MobileSimulator";
import AddLinks from "./widgets/AddLinks";

const LinkTab = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <MobileSimulator />
        <AddLinks />
      </div>
    </>
  );
};

export default LinkTab;
