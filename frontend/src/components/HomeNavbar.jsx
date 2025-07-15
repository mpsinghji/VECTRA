import React from "react";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const HomeNavbar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-black text-white px-4 sm:px-10 py-3 z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="Vectralogo.png"
          alt="VECTRA Logo"
          className="w-24 sm:w-28 h-auto"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 sm:gap-6">
        <RainbowButton>Log in</RainbowButton>
        <RainbowButton>Sign up</RainbowButton>
      </div>
    </div>
  );
};

export default HomeNavbar;
