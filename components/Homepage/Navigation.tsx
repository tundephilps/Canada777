import React from "react";
import {
  IoGameController,
  IoSearch,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { BiSlider } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";
import { FaDice } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { BsGiftFill } from "react-icons/bs";

export default function CasinoNavigation() {
  const navItems = [
    { icon: IoGameController, label: "All Game", active: true },
    { icon: BiSlider, label: "Slots", active: false },
    { icon: MdCasino, label: "Live Casino", active: false },
    { icon: FaDice, label: "Roulette", active: false },
    { icon: GiPokerHand, label: "PLINKO", active: false },
  ];

  return (
    <div className="w-full  text-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between  py-4 border-b border-gray-800">
        {/* Left Side - Navigation Items */}
        <div className="flex items-center gap-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                item.active
                  ? " bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 text-white shadow-lg shadow-red-600/50"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right Side - Search Bar */}
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for games.."
            className="bg-gray-800/50 text-gray-300 placeholder-gray-500 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-64"
          />
        </div>
      </div>
    </div>
  );
}
