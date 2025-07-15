import React from "react";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
    <div>
      <div>
        <HomeNavbar />
      </div>
      <div>
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-66">
          <div className="absolute inset-0">
            <div className="w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] rounded-full bg-green-500 opacity-50 blur-[100px] mx-10 mt-[30vh]" />
          </div>

          {/* First Slide */}
          <div className="relative z-10 text-white flex flex-wrap justify-center  md:justify-end items-center h-full gap-10 px-6 md:px-20">
            <div className="flex flex-col items-center text-center w-[100px] sm:w-[120px]">
              <img src="call.png" alt="call" className="w-20 h-auto" />
              <p className="mt-2 text-sm sm:text-base">
                Video
                <br />
                Conferencing
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-[100px] sm:w-[120px]">
              <img src="chat.png" alt="chat" className="w-20 h-auto" />
              <p className="mt-2 text-sm sm:text-base">
                Real-time
                <br />
                Chat
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-[100px] sm:w-[120px]">
              <img src="calendar.png" alt="calendar" className="w-20 h-auto" />
              <p className="mt-2 text-sm sm:text-base">
                Calendar
                <br />
                Integration
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen overflow-hidden text-white px-6 md:px-20 flex items-center">
        {/* Left Side - Floating Avatars */}
        <div className="relative flex-1 min-h-[500px] min-w-[800px] hidden md:flex flex-col justify-between h-full">
          <div className="flex justify-between px-6">
            <img
              src="/avatar/avatar1.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="/avatar/avatar2.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="/avatar/avatar3.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between px-45">
            <img
              src="/avatar/avatar4.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="/avatar/avatar5.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between px-6">
            <img
              src="/avatar/avatar6.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="/avatar/avatar7.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <img
              src="/avatar/avatar8.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-left ml-20">
          <h1 className="text-4xl sm:text-6xl font-bold">Message privately</h1>
          <p className="text-lg mt-4 md:w-[300px] ">
            Simple, reliable, private messaging and calling for free*, available
            all over the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
