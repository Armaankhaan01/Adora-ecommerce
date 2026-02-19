import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialMediaLinks = [
  {
    name: "Github",
    url: "https://www.github.com/ArmaanKhaan01",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com/Armankhaan01",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/arman_khaan01",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/armaankhaan01",
    icon: <Linkedin className="w-5 h-5" />,
  },
];
const SocialMedia = ({ className, iconClassName, tooltipClassName }: props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex gap-4", className)}>
        {socialMediaLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger>
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover:text-shop_light_green hoverEffect ",
                  iconClassName,
                )}
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("", tooltipClassName)}>
              {link.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default SocialMedia;
