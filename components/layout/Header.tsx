"use client";

import { FaCoins, FaUserCircle } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdAccountBalanceWallet, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Reward from "../../public/Rewards.png";

import Coin from "../../public/Coin.png";

import Face from "../../public/Face.png";

export default function Header() {
  return (
    <div className="bg-[#061621] flex items-center justify-between px-4 py-4 text-white text-sm w-full">
      {/* Left Section */}
      <div className="flex items-center space-x-[200px]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={25}
            className="object-contain h-12"
          />
        </div>

        {/* Rewards */}
        <Image src={Reward} className="h-8" alt="" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className=" bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] inline-flex p-1 rounded-md hover:opacity-90 cursor-pointer">
          {/* Balance */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded-md">
            {/* <MdAccountBalanceWallet className="text-green-400" /> */}
            <Image src={Coin} className="h-6" alt="" />
            <span className="text-[#757e84]">0.0002745</span>
            <div className="bg-[#182935] p-1 rounded-full">
              <MdKeyboardArrowDown />
            </div>
          </div>

          {/* Deposit Button */}
          <button className="flex items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition">
            <span>DEPOSIT</span>
          </button>
        </div>
        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
          <Image src={Face} className="" alt="" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold">Mitchell</span>

            <span className="text-[10px] bg-[#1e141e] border-[#ea0000] text-[#f80507] w-10 border rounded-sm p-1">
              LVL 27
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
