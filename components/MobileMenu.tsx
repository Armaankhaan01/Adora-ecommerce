"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <button className="md:hidden" onClick={() => setIsSideBarOpen(true)}>
        <AlignLeft className="hover:text-dark-color text-light-color cursor-pointer hoverEffect w-5 h-5 " />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      </div>
    </>
  );
};
export default MobileMenu;
