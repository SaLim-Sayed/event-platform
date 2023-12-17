"use client";
import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {}

const NavItems = ({}: IProps) => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex flex-col items-start md:flex-row w-full gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li className={cn(isActive && "text-primary-500","flex-center p-medium whitespace-nowrap")} key={link.label}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
