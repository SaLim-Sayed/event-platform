import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

interface IProps {}

const Header = ({}: IProps) => {
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white">
      <div className="wrapper flex items-center justify-between z-50">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex justify-end w-32 gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <MobileNav />
          <SignedOut>
            <Button asChild className="rounded-full " size={"lg"}>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
