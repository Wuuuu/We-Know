"use client";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

import { SafeUser } from "@/app/types";

type NavbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="relative w-full bg-white z-10 shadow-sm">
      <div className="py-2.5 border-b-[1px]">
        <Container>
          <div className="flex flex-row mr-1.5 items-center justify-between gap-3">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
