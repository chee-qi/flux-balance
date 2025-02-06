"use client";
import { Creepster } from "next/font/google";

const creepster = Creepster({ subsets: ["latin"], weight: "400" });

export function Logo() {
  return (
    <span
      className={`${creepster.className} text-[40px] leading-[58.45px] shadow-custom bg-white  text-[#6E3CBC] rounded-lg`}
    >
      FluxBalance
    </span>
  );
}
