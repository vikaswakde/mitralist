import Link from "next/link";
import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { ImPencil2 } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import {
  PiPencilDuotone,
  PiRocket,
  PiSuitcaseSimpleDuotone,
} from "react-icons/pi";

const NAVIGATION_ITEMS = [
  {
    title: "Scroll",
    icon: <HiOutlineHome />,
  },
  {
    title: "Spotlight",
    icon: <PiRocket />,
  },
  {
    title: "Articles",
    icon: <ImPencil2 className="rotate-[135deg] w-[20px] h-[20px]" />,
  },
  {
    title: "Inbox",
    icon: <BiMessageRoundedDetail />,
  },
  {
    title: "Jobs",
    icon: <PiSuitcaseSimpleDuotone />,
  },
  {
    title: "Search",
    icon: <IoSearchOutline />,
  },
];
const LeftSidebar = () => {
  return (
    <section className="hidden fixed w-[13.25rem] border-r lg:flex flex-col  h-screen items-stretch flex-shrink-0 space-y-2  ">
      <div className="w-full flex flex-col h-full items-stretch mt-2">
        {/* Logo */}
        <Link href={"/"} className="mb-6 flex items-center">
          <span className="bg-mitralist h-8 w-8 rounded-xl p-2 text-white font-bold flex items-center justify-center">
            {" "}
            <span className="text-[1rem]">M</span>
          </span>
          <span className="text-2xl font-extrabold ml-2 font-serif tracking-wider">
            Mitralist
          </span>
        </Link>
        <div className="my-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase()}`}
              className="flex items-center  justify-start w-fit  space-x-3   rounded-3xl p-2 text-xl"
              key={item.title}
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="hover:translate-x-1 hover:translte-y-2 transition duration-200">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="py-3 flex space-x-1 items-center">
          {/* image */}
          {/* <Image src={"/dumy-profile.png"} fill alt="profile" /> */}
          <div className="rounded-full bg-slate-300  h-7 w-7"></div>
          <div className="flex flex-col space-x-1">
            {/* firstname */}
            <span className="hover:translate-x-1 transition duration-200 cursor-pointer ml-2">
              Vikas
            </span>
            <div className="flex w-full items-center space-x-1 hover:translate-x-1  transition duration-200 cursor-pointer">
              <span className="text-sm">
                {/* followers & following */}7{" "}
                <span className="text-xs">followers</span>{" "}
                <span className="">-</span> 19{" "}
                <span className="text-xs">Follwoing</span>
              </span>
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>
        <button className="bg-mitralist rounded-xl py-1 flex items-center space-x-2 justify-center w-fit px-2 text-white font-semibold my-2">
          <BsLightningCharge />
          <span>Quick Actions</span>
          <span className="bg-[#1E874B] px-1 rounded-sm text-sm">Ctrl K</span>
        </button>
        <div className="flex h-full  items-end">
          <div className="bg-slate-300 h-[12rem] w-[12rem] flex items-center justify-center mx-auto mb-2 rounded-2xl"></div>
        </div>
      </div>
      <div>the bottom card</div>
    </section>
  );
};

export default LeftSidebar;
