"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  const navlink = pathname.startsWith("/create-todo") ? (
    <Link href={"/todos"} className="link">
      Todos List
    </Link>
  ) : (
    <Link href={"/create-todo"} className="link">
      Create a Todo
    </Link>
  );
  return navlink;
};

export default NavLinks;
