import Link from "next/link";
import React from "react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href={"/"} className="logo">
        <ClipboardDocumentListIcon style={{ width: "60px" }} />
        MyTodo
      </Link>
      ;
    </div>
  );
};

export default Logo;
