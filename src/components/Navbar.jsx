import Link from "next/link";
import React from "react";
import { FaTicket } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
function Navbar() {
  return (
    <nav className="py-3 px-2 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="px-4 py-2 text-lg">
          <FaTicket fontSize={25} />
        </Link>
        <Link
          href={"/ticket/new"}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded gap-4 text-lg tracking-wide"
        >
          <IoIosAdd />
          <span>Add Ticket</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
