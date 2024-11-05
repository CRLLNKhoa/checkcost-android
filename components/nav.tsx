"use client";
import React from "react";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { IconMenu2 } from "@tabler/icons-react";
import Account from "./account";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-4 pt-4 bg-background z-50">
      <div className="flex items-center justify-between bg-white h-18 p-2 rounded-xl shadow-lg">
        <Link
          href={"/"}
          className="flex items-center gap-2 select-none cursor-pointer"
        >
          <img
            src="/logo.gif"
            alt="logo"
            width={54}
            height={54}
            className="object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center justify-end gap-6">
          <div className="flex items-center gap-2">
            <Button variant="light" className="text-lg">
              Single Rewind
            </Button>
            <Button variant="light" className="text-lg">
              Team Build
            </Button>
            <Button variant="light" className="text-lg">
              Blog
            </Button>
          </div>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="flex lg:hidden ml-auto mr-4"
              isIconOnly
              variant="bordered"
            >
              <IconMenu2 />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new" href="/single-rewind">
              Single Rewind
            </DropdownItem>
            <DropdownItem key="copy" href="/team-build">
              Team Build
            </DropdownItem>
            <DropdownItem key="copy" href="/blog">
              Blog
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Account />
      </div>
    </nav>
  );
}

export default Nav;
