"use client";
import React from "react";
import devManiaLogo from "../../public/images/DevsHouse.svg";
import calendarIcon from "../../public/images/cal-icon.png";
import locationIcon from "../../public/images/location.png";
import HeroImage1 from "../../public/gifs/1.gif";
import HeroImage2 from "../../public/gifs/2.gif";
import HeroImage3 from "../../public/gifs/3.gif";
import HeroImage4 from "../../public/gifs/4.gif";
import HeroImage5 from "../../public/gifs/5.gif";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineIdentification, HiOutlineSpeakerphone } from "react-icons/hi";

export default function Hero() {
  return (
    <div className="flex mt-10 h-[90vh] flex-col items-center justify-center gap-4 bg-white bg-cover bg-no-repeat bg-center">
      <div className="absolute -right-52 rotate-90 -top-36 hidden md:block">
        <Image src={HeroImage1} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute left-2 top-0 hidden md:block">
        <Image src={HeroImage2} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -left-10 -bottom-10 hidden md:block">
        <Image src={HeroImage3} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -right-8 -bottom-10 hidden md:block">
        <Image src={HeroImage4} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute">
        <Image src={HeroImage5} width={500} alt="devManiaLogo" className="opacity-40"></Image>
      </div>
      <Image src={devManiaLogo} alt="devManiaLogo" className="px-12 md:p-0 z-50"></Image>
      <div className="flex flex-col gap-4 z-50 items-center">
        <span className="flex flex-row items-center gap-2 underline">
          <Link
            href={
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240315T013000Z%2F20240317T133000Z&details=&location=VIT%20Chennai&text=DevsHouse"
            }
            className="font-Inter-800 text-md sm:text-2xl"
          >
            March 15th - 17th, 2024
          </Link>
        </span>

        <span className="flex flex-row items-center gap-2 underline">
          <Link href={"https://maps.app.goo.gl/CPiU5WWe2WAAR6peA"} className="font-Inter-800 text-md sm:text-2xl">
            VIT, Chennai
          </Link>
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <span className="flex items-center gap-2 bg-blue-500 rounded-md font-bold text-2xl px-4 py-3 text-white hover:scale-110 transition-transform ease-out z-50">
          <HiOutlineIdentification />
          <Link href="">Pre-Register Now! </Link>
        </span>
        <span className="flex items-center gap-2 bg-blue-500 rounded-md font-bold text-2xl px-4 py-3 text-white hover:scale-110 transition-transform ease-out z-50">
          <HiOutlineSpeakerphone />
          <Link href="https://discord.gg/m2zfNC7M">Join our Community</Link>
        </span>
      </div>
    </div>
  );
}
