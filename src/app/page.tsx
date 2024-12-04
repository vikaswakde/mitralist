import LeftSidebar from "@/components/LeftSidebar";
import {
  Bookmark,
  BookOpen,
  DotIcon,
  FocusIcon,
  ImagePlusIcon,
  LayoutList,
  ListFilter,
  ListFilterIcon,
  ListTodoIcon,
  MenuIcon,
  Repeat2,
  UploadIcon,
  VoteIcon,
} from "lucide-react";
import Link from "next/link";
import { BiMessageSquare, BiUpvote } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";
import { ImPencil2 } from "react-icons/im";
import { PiPencilDuotone } from "react-icons/pi";
import { RiListRadio } from "react-icons/ri";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-white">
      <div className="lg:max-w-[1200px] w-full min-h-screen mx-auto flex mt-1">
        {/* Left sidebar for navigation/header */}
        <LeftSidebar />
        <main className="ml-[13.25rem] w-full lg:max-w-[40rem] h-full fixed top-0 border-r">
          <div className="border-b py-2 flex items-center ">
            <div className="flex items-center justify-between w-full px-6  py-1">
              <div className="font-bold pl-1">Scroll</div>
              <div className="rounded-xl border border-gray-300 px-2 py-2 space-x-5 flex items-center justify-between text-xs cursor-pointer">
                <Link
                  href={"/"}
                  className="px-2 font-[550] active:text-mitralist "
                >
                  NEWEST
                </Link>
                <Link href={"/"} className="px-2  font-[550]  ">
                  TRENDING{" "}
                  <span className="rounded-[11px] bg-black  text-white px-2 py-[3px]">
                    6
                  </span>
                </Link>
                <Link href={"/"} className="px-2 font-[550] ">
                  FOLLOWING
                </Link>
              </div>
              <div className="border rounded-[12px] p-[7px]">
                <ListFilterIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="hidden sm:flex bg-gray-50 px-4 py-4 w-full z-10 flex-col border-b border-gray-300 space-y-2">
            <div className="flex  items-center justify-start space-x-2 w-full">
              <div className="w-[38px] h-[38px] rounded-full bg-slate-300 flex flex-shrink-0"></div>
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="What are you working on?"
                  className="w-full py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 ml-8 text-gray-700  my-2 flex-shrink-0 h-full">
                <button className="border-transparent hover:border border-gray-300 rounded-[12px] p-[7px] hover:shadow-md transition-shadow duration-100">
                  <ImagePlusIcon className="" />
                </button>
                <button className="border-transparent hover:border border-gray-300 rounded-[12px] p-[7px] hover:shadow-md transition-shadow duration-100">
                  <LayoutList />
                </button>
                <button className="hover:border-transparent hover:border border-gray-300 rounded-[12px] p-[7px] hover:shadow-md transition-shadow duration-100">
                  <BookOpen />
                </button>
                <button className="hover:border-transparent hover:border border-gray-300 rounded-[12px] p-[7px] hover:shadow-md transition-shadow duration-100">
                  <ListTodoIcon />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="rounded-xl flex border py-1 px-4 space-x-2 justify-center items-center  text-[rgb(13 13 13)] font-semibold leading-5 hover:shadow-md transition-shadow duration-200 cursor-pointer">
                  <span>
                    <ImPencil2 className="w-[16px] h-[16px] rotate-[135deg]" />
                  </span>
                  <span>Write Article</span>
                </button>
                <div className="rounded-xl bg-mitralist px-4 py-1 text-white font-bold hover:drop-shadow-lg transition-shadow duration-200 cursor-pointer">
                  Post
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex px-4 md:px-6 py-4 border-b  space-x-2"
              >
                <div className="flex">
                  <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-col -space-y-1">
                    <div className="font-semibold">Vikas Wakde</div>
                    <div className="flex text-sm text-gray-700 -space-x-1">
                      <span>@vikaswakde</span>
                      <DotIcon />
                      <span>#feature</span>
                      <DotIcon />
                      <span>5s</span>
                    </div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    consequuntur veritatis eos perferendis porro id sunt
                    voluptatem iure. Ullam dignissimos assumenda ex sint qui id,
                    tempora et eveniet.
                  </div>
                  <div className="bg-slate-300 aspect-square h-96 max-h-[600px] rounded-2xl  object-cover"></div>
                  <div className="flex items-center justify-between w-full py-2">
                    <div className="flex items-center justify-start space-x-16 w-full">
                      <div className="flex items-center justify-center  space-x-2">
                        <span className="">
                          <BiMessageSquare className="font-bold" />
                        </span>
                        <span>0</span>
                      </div>
                      <div className="flex  items-center justify-center  space-x-2">
                        {" "}
                        <span>
                          <Repeat2 />
                        </span>
                        <span>0</span>
                      </div>
                      <div className="flex  items-center justify-center  space-x-2 ">
                        {" "}
                        <span className="relative">
                          <BiUpvote className="w-[24px] h-[24px]" />
                          <BiUpvote className=" absolute  top-0 bg-transparent inset-0 w-full h-full border-mitralist text-mitralist bg-mitralist" />
                          {/* <div className="absolute inset-0 bg-mitralist top-0 w-full h-full"></div> */}
                        </span>
                        <span>42</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div>
                        <Bookmark />
                      </div>
                      <div>
                        <FocusIcon />
                      </div>
                    </div>
                  </div>
                  <div className="flex relative space-x-6 py-2 items-center">
                    <div className="absolute top-1 bg-orange-500   h-[24px] w-[24px] rounded-full"></div>
                    <div className="absolute top-1 border -left-[5px] bg-slate-300 h-[24px] w-[24px] rounded-full"></div>
                    <div className="absolute top-1 left-[0.9rem] bg-green-500 h-[24px] w-[24px] rounded-full"></div>
                    <div className="text-xs pl-[3rem]">
                      Ram, Akbar, Anotney & 39 other upvoted
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </div>
  );
};

export default Home;
