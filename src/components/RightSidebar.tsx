import { DotIcon } from "lucide-react";
import { BiUpvote } from "react-icons/bi";
import { BsFileBarGraph, BsSearch } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { LuBell } from "react-icons/lu";

import React from "react";

const RightSidebar = () => {
  return (
    <section className="h-full max-w-[22rem] hidden lg:flex w-full flex-col ">
      <div className=" h-full w-full  py-3  fixed top-0 max-w-[22rem] border-r">
        <div className="flex items-center justify-between w-full px-4 ">
          <div className="flex relative text-gray-500  max-w-[60%] pl-4">
            <label htmlFor="searchBox">
              <div className="absolute top-2 left-6">
                <BsSearch className="w-4 h-4" />
              </div>
            </label>
            <input
              type="text"
              id="searchBox"
              className="rounded-2xl max-w-[95%] py-[3px] border pl-7 text-gray-800"
              placeholder="Search Mitralist"
            />
          </div>
          <div className="flex w-full items-center justify-around text-lg bg-white">
            <div className="border rounded-xl px-[6px] py-[6px]">
              <BsFileBarGraph />
            </div>
            <div className=" border rounded-xl px-[6px] py-[6px]">
              <LuBell />
            </div>
            {/* User profile */}
            <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="h-full min-h-screen fixed top-[3.60rem] border-r border-t px-3 py-5 overflow-y-auto no-scrollbar flex w-full max-w-[22rem] ">
        <div className="flex flex-col items-center w-full space-y-12">
          <div className="border rounded-2xl w-[95%] ">
            <h2 className="py-3 px-4 font-semibold text-sm">
              🌟 Todays Staff Phicked Project
            </h2>
            <div className=" h-48 w-full rounded-2xl bg-gradient-to-tr from-transparent to-slate-200">
              <div className="flex flex-col justify-between space-y-2 space-x-2">
                <div className="flex justify-between px-4 py-2 pt-4">
                  <div className="h-16 w-[45%] rounded-xl bg-black"></div>
                  <div className="border px-4 flex flex-col justify-center rounded-lg bg-white font-bold text-lg">
                    <BiUpvote className="" />
                    <span className="font-bold text-sm">16</span>
                  </div>
                </div>
                <div className="flex flex-col space-x-2 ">
                  <div className="font-semibold pl-2">Updataly</div>
                  <div className="text-gray-500 text-sm">
                    changing for your SaaS in 2 minutes
                  </div>
                  <div className="flex items-center space-x-1 py-2">
                    <span className="text-gray-500 text-sm">By</span>
                    <span className="font-semibold text-gray-700 text-sm">
                      Ram Goelk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-4">
            <div className="flex items-center justify-between font-semibold">
              <h2>Active Discussions</h2>
              <FaArrowRight />
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex px-4  py-4 space-x-2">
                <div className="flex">
                  <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col -space-y-1">
                    <div className="font-medium text-black">Vikas Wakde</div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse sint ea aspernatur.....
                  </div>
                  <div className="flex relative space-x-6 py-2 items-center">
                    <div className="absolute top-1 bg-orange-500   h-[20px] w-[20px] rounded-full"></div>
                    <div className="absolute top-1 border -left-[5px] bg-slate-300 h-[20px] w-[20px] rounded-full"></div>
                    <div className="absolute top-1 left-[0.9rem] bg-green-500 h-[20px] w-[20px] rounded-full"></div>
                    <div className="text-xs pl-[3rem]">
                      Ram & 39 other upvoted
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between font-semibold">
              <h2>Open Roles</h2>
              <FaArrowRight />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex px-1   space-x-2">
                <div className="flex pt-2">
                  <div className="h-6 w-6 bg-slate-300 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col -space-y-1">
                    <div className="font-medium text-black">
                      Frontend Developer
                    </div>
                  </div>
                  <div className="flex text-wrap  justify-start text-sm ">
                    <span className="shrink-0">at Peerlist</span>
                    <DotIcon className="text-[4px]" />
                    <span className="shrink-0">Full-time</span>
                    <DotIcon className="text-[4px]" />
                    <span>In-Office (Pune, India)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
