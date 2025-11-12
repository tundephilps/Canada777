import Image from "next/image";
import React from "react";
import Hero from "../../../public/Hero.png";
import Visa from "../../../public/Visa.png";
import CasinoNavigation from "../../../components/Homepage/Navigation";
import Depo1 from "../../../public/Depo1.png";

import Depo2 from "../../../public/Depo2.png";
import { BsGiftFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import NewGames from "../../../components/Homepage/NewGames";
import TopGames from "../../../components/Homepage/TopGames";
import LiveCasino from "../../../components/Homepage/LiveCasino";
import PaymentMethod from "../../../components/Homepage/PaymentMethod";
import WelcomeBonus from "../../../components/Homepage/WelcomeBonus";
import BonusPromotion from "../../../components/Homepage/BonusPromotion";

const page = () => {
  return (
    <div className="w-full">
      <div className="relative   flex items-center">
        <Image src={Hero} alt="" className="w-full" />

        <div className="absolute text-white items-center   left-7">
          <div className="">
            {/* Header */}
            <div className="mb-2">
              <p className="text-xs font-semibold tracking-wider uppercase opacity-90">
                WELCOME PACK
              </p>
            </div>

            {/* Main Offer */}
            <div className="mb-1">
              <h2 className="text-4xl font-bold leading-tight">
                620% up to $8,000
              </h2>
            </div>

            {/* Subtext */}
            <div className="mb-6">
              <p className="text-sm opacity-80">+400 FS on first 4 deposits</p>
            </div>

            {/* Join Now Button */}
            <button className="flex cursor-pointer items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition">
              <span>Join Now</span>
            </button>
          </div>
          <Image src={Visa} alt="" className=" mt-8" />
        </div>
      </div>

      <CasinoNavigation />

      <WelcomeBonus />

      <NewGames />
      <TopGames />
      <LiveCasino />
      <PaymentMethod />
      <BonusPromotion />
    </div>
  );
};

export default page;
