// components/Sidebar.tsx
"use client";

import {
  FaHome,
  FaDice,
  FaGift,
  FaCrown,
  FaCoins,
  FaHeadset,
} from "react-icons/fa";
import { RiLiveLine, RiTrophyLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SideAds from "../../public/SideAds.png";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/casino", label: "Casino", icon: <FaDice /> },
    { href: "/live-casino", label: "Live Casino", icon: <RiLiveLine /> },
    { href: "/jackpot", label: "Jackpot", icon: <FaGift /> },
    { href: "/tournaments", label: "Tournaments", icon: <RiTrophyLine /> },
    { href: "/promotions", label: "Promotions", icon: <FaGift /> },
    { href: "/vip", label: "VIP Club", icon: <FaCrown /> },
    { href: "/cashback", label: "Cashback", icon: <FaCoins /> },
    { href: "/contact", label: "Contact", icon: <FaHeadset /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#081a26] rounded-md  text-white flex flex-col p-4 space-y-4">
      {/* Jackpot Card */}
      <div>
        <div className="relative">
          <Image
            src={SideAds}
            alt="Jackpot Banner"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            active={pathname === link.href}
          />
        ))}
      </nav>
    </div>
  );
}

type SidebarLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function SidebarLink({ href, icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg relative overflow-hidden transition-all duration-300 ${
        active
          ? "text-[#ff1b1b] font-semibold"
          : "text-[#58656e] hover:text-white bg-[#0a1f2d]"
      }`}
    >
      {/* Animated gradient for active state */}
      <span
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#860001] via-[#1a1f2f] to-transparent transition-all duration-500 ease-in-out ${
          active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      />

      {/* Content (icon + label) */}
      <span className="relative z-10 text-lg">{icon}</span>
      <span className="relative z-10 font-medium text-sm">{label}</span>
    </Link>
  );
}
