import React from "react";

const Home = () => {
  return (
    <>
      {/* Full Page */}

      <div className="flex flex-row w-full bg-black text-white relative">
        {/* Navigation bar */}
        <aside className="w-3/12 pl-28 h-full sticky top-0">
          <div className="flex flex-col h-screen ">
            <div className="w-full h-16   flex flex-flow items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
              </svg> */}

              <i className="fa-brands fa-twitter text-5xl ml-5 mt-3"></i>
            </div>

            {/* Home */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-solid fa-house text-2xl pr-4"></i>
              <p className="text-xl">Home</p>
            </div>

            {/* Explore */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-solid fa-magnifying-glass text-2xl pr-4"></i>
              <p className="text-xl">Explore</p>
            </div>

            {/* Notification */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-bell text-2xl pr-4"></i>
              <p className="text-xl">Notification</p>
            </div>

            {/* Messages */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-envelope text-2xl pr-4"></i>
              <p className="text-xl">Messages</p>
            </div>

            {/* Lists */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-rectangle-list text-2xl pr-4"></i>
              <p className="text-xl">Lists</p>
            </div>

            {/* Bookmarks */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-bookmark text-2xl pr-4"></i>
              <p className="text-xl">Bookmarks</p>
            </div>

            {/* Verified */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-circle-check text-2xl pr-4"></i>
              <p className="text-xl">Verified</p>
            </div>

            {/* Profile */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-regular fa-user text-2xl pr-4"></i>
              <p className="text-xl">Profile</p>
            </div>

            {/* More */}
            <div className="w-fit h-14 flex flex-row items-center hover:bg-gray-900 cursor-pointer px-5 hover:rounded-3xl mt-1 mb-1">
              <i className="fa-solid fa-spinner text-2xl pr-4"></i>
              <p className="text-xl">More</p>
            </div>

            <div className="w-full h-16 flex flex-row items-center justify-start">
              <button className="bg-blue-500 w-10/12 h-5/6 rounded-full hover:bg-blue-700">
                Tweet
              </button>
            </div>

            <div className="w-11/12 h-16 flex flex-row items-center justify-evenly mt-2 mb-2">
              <div className="w-2/12 h-3/5 border-2 border-white rounded-full"></div>
              {/* UserName and Email Id */}
              <div className="w-8/12 h-3/4 flex flex-col justify-evenly px-2">
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
        <div className="w-6/12 border-2 border-gray-600">
          {/* Home section */}
          <div className="border-b-2 border-gray-600 h-28 flex flex-col sticky top-0 backdrop-blur">
            <p className="w-full h-2/4  pt-2 pl-4 text-xl font-semibold">
              Home
            </p>
            <div className="w-full h-2/4  flex justify-evenly items-center">
              <div className="hover:bg-slate-950 cursor-pointer w-6/12 h-full flex items-center justify-center">
                <p className="font-bold">For You</p>
              </div>
              <div className="hover:bg-slate-950 cursor-pointer w-6/12 h-full flex items-center justify-center">
                <p className="font-bold">Following</p>
              </div>
            </div>
          </div>

          {/* Post */}
          <div className="h-56 border-b-2 border-gray-600">
            {/* post top */}
            <div className="h-3/4 flex ">
              {/* profile image */}
              <div className="h-14 w-14 rounded-full mx-2 my-4"></div>

              <div className="w-5/6 mx-2 flex flex-col justify-evenly">
                {/* Everyone */}
                <div className="flex border-2 w-fit rounded-full px-2">
                  <p className="text-blue-400 font-bold">Everyone</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#60a4f9"
                    viewBox="0 0 256 256"
                  >
                    <path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>
                  </svg>
                </div>
                {/* whats happeing */}
                <div className="h-12">
                  <input
                    type="text"
                    placeholder="What is happening?!"
                    className="w-full h-full px-4 bg-transparent outline-none font-semibold text-xl"
                  />
                </div>
                {/* Everyone can replay */}
                <div className="flex items-center pb-3 border-b-2 border-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#60a4f9"
                    viewBox="0 0 256 256"
                    className="ml-1 mr-1"
                  >
                    <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.44,91.44,0,0,1-8.58,38.76L162.8,136.85a12.07,12.07,0,0,0-4.68-1.67l-22.82-3.07a12,12,0,0,0-12.56,7l-.4.88h-11.2a4,4,0,0,1-3.6-2.26l-3.8-7.86a11.93,11.93,0,0,0-8.28-6.5L82.07,120.5,92.67,102a4,4,0,0,1,3.47-2h16.71a12,12,0,0,0,5.8-1.5l12.24-6.76a11.79,11.79,0,0,0,2.25-1.6L160.05,65.8a12,12,0,0,0,2.43-14.75l-5.86-10.49A92.17,92.17,0,0,1,220,128ZM145.89,37.75l9.6,17.2a4,4,0,0,1-.81,4.92L127.77,84.21a4.41,4.41,0,0,1-.75.53L114.78,91.5a4,4,0,0,1-1.93.5H96.14a12,12,0,0,0-10.41,6l-11.86,20.7a4,4,0,0,1-2.75-2.47L59.63,85.6a4,4,0,0,1,.06-3L71,55.81A91.51,91.51,0,0,1,128,36,92.53,92.53,0,0,1,145.89,37.75ZM36,128A91.52,91.52,0,0,1,56,70.77l-3.71,8.75a12,12,0,0,0-.18,8.88l11.49,30.67a11.93,11.93,0,0,0,8.72,7.52l21.43,4.61a4,4,0,0,1,2.76,2.17l3.8,7.86a12.07,12.07,0,0,0,10.8,6.77h7.64L109,169.85A12,12,0,0,0,111.26,183l19.68,20.26a4,4,0,0,1,1,3.47L129.36,220,128,220A92.1,92.1,0,0,1,36,128Zm101.6,91.5,2.18-11.29a12.08,12.08,0,0,0-3-10.49l-19.68-20.26a4,4,0,0,1-.71-4.35l13.7-30.74a4,4,0,0,1,4.18-2.33l22.82,3.07a4.12,4.12,0,0,1,1.56.56l49.11,30.2A92.12,92.12,0,0,1,137.6,219.5Z"></path>
                  </svg>
                  <p className="text-blue-400 font-bold">Everyone can reply</p>
                </div>
              </div>
            </div>
            {/* post bottom */}
            <div className="h-1/4 flex items-center justify-center ">
              <div className="w-4/5 h-full flex justify-between items-center px-1">
                {/* icons */}
                <div className="w-80 h-10 flex justify-evenly items-center">
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                      
                    >
                      <path d="M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"></path>
                    </svg>
                  </div>
                  {/* picture */}
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                      
                    >
                      <path d="M148,72V184a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm76,12a12,12,0,0,0,0-24H176a12,12,0,0,0-12,12V184a12,12,0,0,0,24,0V140h28a12,12,0,0,0,0-24H188V84ZM96,116H72a12,12,0,0,0,0,24H84v12a20,20,0,0,1-40,0V104A20,20,0,0,1,64,84,21.8,21.8,0,0,1,82.35,94.22a12,12,0,0,0,20.53-12.44A45.67,45.67,0,0,0,64,60a44.05,44.05,0,0,0-44,44v48a44,44,0,0,0,88,0V128A12,12,0,0,0,96,116Z"></path>
                    </svg>
                  </div>
                  {/* Gif */}
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                      
                    >
                      <path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm-92-48V80a20,20,0,0,1,20-20h36a20,20,0,0,1,20,20v88a20,20,0,0,1-20,20H156A20,20,0,0,1,136,168Zm24-4h28V84H160ZM44,168V40A20,20,0,0,1,64,20h36a20,20,0,0,1,20,20V168a20,20,0,0,1-20,20H64A20,20,0,0,1,44,168Zm24-4H96V44H68Z"></path>
                    </svg>
                  </div>
                  {/* Smile */}
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                     
                    >
                      <path d="M178.39,158c-11,19.06-29.39,30-50.39,30s-39.36-10.93-50.39-30a12,12,0,0,1,20.78-12c3.89,6.73,12.91,18,29.61,18s25.72-11.28,29.61-18a12,12,0,1,1,20.78,12ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM92,124a16,16,0,1,0-16-16A16,16,0,0,0,92,124Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,92Z"></path>
                    </svg>
                  </div>
                  {/* Schedule */}
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                    
                    >
                      <path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z"></path>
                    </svg>
                  </div>
                  {/* Location */}
                  <div className="h-8 w-9 flex items-center justify-center hover:bg-gray-900 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#1d9bf0"
                      viewBox="0 0 256 256"
                     
                    >
                      <path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path>
                    </svg>
                  </div>
                </div>
                {/* Tweet Button */}
                <button className="w-24 rounded-full h-10 bg-blue-600 hover:bg-blue-800">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="w-3/12 pl-10 h-full">
          {/* searchBar */}
          <div className="w-4/5 h-12 rounded-full flex justify-evenly items-center truncate bg-gray-800 mt-4 mb-4 sticky top-1">
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
            <h1 className="px-4 font-bold text-lg mt-2 mb-2">
              Whats's happing
            </h1>

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

            <p className="px-3 text-blue-500 hover:text-blue-700 hover:bg-gray-950 cursor-pointer mt-2 mb-2 h-10 flex items-center hover:rounded-lg">
              Show More
            </p>
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
                <p className="hover:underline">Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">
                Follow
              </button>
            </div>

            <div className="flex justify-evenly items-center h-14  self-center w-full mt-2 mb-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer px-2">
              {/* Profile Pics */}
              <div className="border-2 border-white w-1/5 h-12 rounded-full">
                {/* profile image */}
              </div>
              {/* Name and Email */}
              <div className=" w-2/4 h-full">
                <p className="hover:underline">Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">
                Follow
              </button>
            </div>

            <div className="flex justify-evenly items-center h-14  self-center w-full mt-2 mb-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer px-2">
              {/* Profile Pics */}
              <div className="border-2 border-white w-1/5 h-12 rounded-full">
                {/* profile image */}
              </div>
              {/* Name and Email */}
              <div className=" w-2/4 h-full">
                <p className="hover:underline">Sonu sood</p>
                <p>@sonuSood</p>
              </div>
              {/* follow button */}
              <button className="border-2 border-white w-1/4 h-8 rounded-2xl text-black bg-white font-semibold">
                Follow
              </button>
            </div>

            <p className="text-blue-500 px-4 py-2  hover:bg-gray-950 hover:rounded-lg cursor-pointer mb-2 hover:text-blue-700">
              Show more
            </p>
          </div>

          {/* Footer */}
          <div className=" h-20 w-4/5 mb-24 flex flex-wrap text-sm font-light">
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              Terms of Services
            </p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              Privacy Policy
            </p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              Cookie Policy
            </p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              Assibility
            </p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              Ads info
            </p>
            <p className="ml-2 mr-2 hover:underline decoration-solid cursor-pointer">
              More...
            </p>
            <p className="ml-6 mr-6">&copy; 2023 X Corp.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
