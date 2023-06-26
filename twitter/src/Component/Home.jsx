import React from "react";

const Home = () => {
  return (
    <>
      {/* Full Page */}

      <div className="flex flex-row w-full bg-black text-white ">
        {/* Navigation bar */}
        <aside className="w-3/12 pl-28 h-full">
          <div className="flex flex-col h-screen">
            <div className="w-full h-16   flex flex-flow items-center">
              {/* <i className="fa-brands fa-twitter text-3xl"></i> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
              </svg>
            </div>

            {/* Home */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-solid fa-house text-2xl pr-4"></i>
              <p className="text-xl">Home</p>
            </div>

            {/* Explore */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-solid fa-magnifying-glass text-2xl pr-4"></i>
              <p className="text-xl">Explore</p>
            </div>

            {/* Notification */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-regular fa-bell text-2xl pr-4"></i>
              <p className="text-xl">Notification</p>
            </div>

            {/* Messages */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-regular fa-envelope text-2xl pr-4"></i>
              <p className="text-xl">Messages</p>
            </div>

            {/* Lists */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-regular fa-rectangle-list text-2xl pr-4"></i>
              <p className="text-xl">Lists</p>
            </div>

            {/* Bookmarks */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-solid fa-house text-2xl pr-4"></i>
              <p className="text-xl">Bookmarks</p>
            </div>

            {/* Verified */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-regular fa-circle-check text-2xl pr-4"></i>
              <p className="text-xl">Verified</p>
            </div>

            {/* Profile */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-regular fa-user text-2xl pr-4"></i>
              <p className="text-xl">Profile</p>
            </div>

            {/* More */}
            <div className="w-full h-16   flex flex-row items-center">
              <i className="fa-solid fa-spinner text-2xl pr-4"></i>
              <p className="text-xl">More</p>
            </div>

            <div className="w-full h-16 flex flex-row items-center justify-start">
              <button className="bg-blue-500 w-10/12 h-5/6 rounded-full hover:bg-blue-700">
                Tweet
              </button>
            </div>

            <div className="w-full h-16 flex flex-row items-center justify-evenly">
              <div className="w-2/12 h-3/5"></div>
              {/* UserName and Email Id */}
              <div className="w-8/12 h-3/4 flex flex-col justify-evenly">
                <p>Name</p>
                <p>Email</p>
              </div>
              <div className="w-2/12 h-3/5 flex items-center justify-center">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </aside>

        {/* Middle Section */}
        <div className="w-6/12 border-2 border-gray-600"></div>

        {/* Search Section */}
        <div className="w-3/12 pl-10 h-full">
          {/* searchBar */}
          <div className="w-4/5 h-12 rounded-full flex justify-evenly items-center truncate bg-gray-900 mt-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
              className="w-2/12"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>

            <input
              type="search"
              placeholder="Search"
              className="w-4/5 h-4/5 border-none bg-transparent outline-none"
            />
          </div>

          {/* Verified */}
          <div className="bg-gray-900 w-4/5 h-32 rounded-2xl flex flex-col justify-evenly pl-3 mt-4 mb-4">
            <p className="text-2xl font-bold">Get Verified</p>
            <p className="font-semibold">Subscribe to unlock new features.</p>
            <button className="w-32 rounded-full h-10 bg-blue-500 hover:bg-blue-600">
              Get Verified
            </button>
          </div>

          {/* what happing  */}
          <div className="w-4/5 rounded-2xl flex flex-col justify-evenly  bg-gray-900 mt-4 mb-4">
            <h1 className="px-4 font-bold text-lg mt-2 mb-2">Whats's happing</h1>

            <div className=" h-18 hover:bg-gray-950 px-3 rounded-lg cursor-pointer mt-2 mb-2">
              <div className="flex justify-between">
                <p className="font-thin">Trending in India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  className="hover:bg-gray-700 rounded-full"
                >
                  <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>
                </svg>
              </div>
              <p className="font-bold">#Something</p>
              <p className="font-extralight">No. of twittes</p>
            </div>

            <div className=" h-18  hover:bg-gray-950 px-3 rounded-lg cursor-pointer mt-2 mb-2">
              <div className="flex justify-between">
                <p className="font-thin">Trending in India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  className="hover:bg-gray-700 rounded-full"
                >
                  <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>
                </svg>
              </div>
              <p className="font-bold">#Something</p>
              <p className="font-extralight">No. of twittes</p>
            </div>

            <div className="h-18  hover:bg-gray-950 px-3 rounded-lg cursor-pointer mt-2 mb-2">
              <div className="flex justify-between">
                <p className="font-thin">Trending in India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  className="hover:bg-gray-700 rounded-full"
                >
                  <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>
                </svg>
              </div>
              <p className="font-bold">#Something</p>
              <p className="font-extralight">No. of twittes</p>
            </div>

            <div className=" h-18  hover:bg-gray-950 px-3 rounded-lg cursor-pointer mt-2 mb-2">
              <div className="flex justify-between">
                <p className="font-thin">Trending in India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  className="hover:bg-gray-700 rounded-full"
                >
                  <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>
                </svg>
              </div>
              <p className="font-bold">#Something</p>
              <p className="font-extralight">No. of twittes</p>
            </div>

            <div className=" h-18  hover:bg-gray-950 px-3 rounded-lg cursor-pointer mt-2 mb-2">
              <div className="flex justify-between">
                <p className="font-thin">Trending in India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  className="hover:bg-gray-700 rounded-full"
                >
                  <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,48,144ZM208,96a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,208,144Z"></path>
                </svg>
              </div>
              <p className="font-bold">#Something</p>
              <p className="font-extralight">No. of twittes</p>
            </div>

            <p className="px-3 text-blue-500 hover:text-blue-700 hover:bg-gray-950 cursor-pointer mt-2 mb-2 h-10 flex items-center">Show More</p>
          </div>

          {/* Who to follow */}
          <div className=" w-4/5 mt-4 mb-4 rounded-xl flex flex-col justify-evenly bg-gray-900">
            <h1 className="mt-2 mb-2 px-4 font-bold text-xl">Who to follow</h1>

            {/* followers */}
            <div className="flex justify-evenly items-center h-14  self-center w-full mt-2 mb-2 hover:bg-gray-950 hover:rounded-lg cursor-pointer px-2">
              {/* Profile Pics */}
              <div className="border-2 border-white w-1/5 h-12 rounded-full">
                {/* profile image */}
              </div>
              {/* Name and Email */}
              <div className=" w-2/4 h-full">
                <p>Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">Follow</button>
            </div>

            <div className="flex justify-evenly items-center h-14  self-center w-full mt-2 mb-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer px-2">
              {/* Profile Pics */}
              <div className="border-2 border-white w-1/5 h-12 rounded-full">
                {/* profile image */}
              </div>
              {/* Name and Email */}
              <div className=" w-2/4 h-full">
                <p>Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">Follow</button>
            </div>

            <div className="flex justify-evenly items-center h-14  self-center w-full mt-2 mb-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer px-2">
              {/* Profile Pics */}
              <div className="border-2 border-white w-1/5 h-12 rounded-full">
                {/* profile image */}
              </div>
              {/* Name and Email */}
              <div className=" w-2/4 h-full">
                <p>Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">Follow</button>
            </div>

            <p className="text-blue-500 px-4 py-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer mb-2 hover:text-blue-700">Show more</p>
          </div>

          {/* Footer */}
          <div className=" h-20 w-4/5 mb-24 flex flex-wrap text-sm font-light">
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">Terms of Services</p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">Privacy Policy</p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">Cookie Policy</p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">Assibility</p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">Ads info</p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">More...</p>
            <p className="ml-6 mr-6 cursor-pointer">&copy; 2023 X Corp.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
