import LeftSidebar from "@/components/LeftSidebar";
import MainSection from "@/components/MainSection";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-white">
      <div className="lg:max-w-[1200px] w-full h-full mx-auto flex relative">
        {/* Left sidebar for navigation/header */}
        <LeftSidebar />
        {/* Main Feeds Section  */}
        <MainSection />
        {/* <section>right section</section> */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
