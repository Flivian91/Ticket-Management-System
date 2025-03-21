import React from "react";
import { FaFire } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
function TicketCard() {
  return (
    <div className="py-2 px-2 rounded flex flex-col gap-3 shadow bg-gray-300/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-red-500 text-base">
          <FaFire />
          <FaFire />
          <FaFire />
          <FaFire />
        </div>
        <button className="rounded cursor-pointer p-2 text-lg text-black hover:bg-gray-400">
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="border-b border-gray-100 ">This is the title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {/* Time */}
          <div className="flex gap-2">
            <span>08/31/3032</span>
            <span>10:30PM</span>
          </div>
          <div className="h-2.5 w-full rounded-full border border-gray-100 overflow-hidden">
            <div style={{ width: "30%" }} className="h-full bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <button className="px-3 py-1 text-base rounded-full bg-green-200 font-semibold cursor-pointer">Done</button>
      </div>
    </div>
  );
}

export default TicketCard;
