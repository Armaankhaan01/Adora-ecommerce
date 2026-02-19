"use client";
import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const pathname = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl transform ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}
    >
      <div
        ref={sideBarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        <div className="flex h-fit w-full gap-5 justify-between">
          <Logo
            className="text-white "
            spanClassName="group-hover:text-white"
          />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-10 text-lg font-medium">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-shop_light_green hoverEffect relative group ${pathname === item.href && "text-shop_light_green"}`}
            >
              {item?.title}
              <span
                className={`absolute -bottom-0.5  left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect ${pathname === item.href && "w-1/2"}`}
              />
              <span
                className={`absolute -bottom-0.5  right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect ${pathname === item.href && "w-1/2"}`}
              />
            </Link>
          ))}

          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
