import React from "react";

const Home = () => {
  return (
    <>
      {/* Full Page */}

      <div className="flex flex-row h-screen w-full border-2 border-red-400 bg-black text-white">
        {/* Navigation bar */}
        <aside className="h-screen w-3/12 border-2 border-blue-400 pl-28">
          <div className="flex flex-col h-screen">
            <div className="w-full h-16   flex flex-flow items-center">
              <i className="fa-brands fa-twitter text-3xl"></i>
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
              <button className="bg-blue-500 w-10/12 h-5/6 rounded-full hover:bg-blue-700">Tweet</button>
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
        <div className="w-6/12 border-2 border-black"></div>

        {/* Search Section */}
        <div className="h-screen w-3/12 border-2 border-yellow-500 ">World</div>
      </div>
    </>
  );
};

export default Home;
