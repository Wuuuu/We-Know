"use client";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

type NavbarProps = {
  currentUser?: null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className=" relative w-full bg-white z-10 shadow-sm">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row mr-1.5 items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;