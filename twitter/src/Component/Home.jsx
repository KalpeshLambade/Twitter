import React from "react";

const Home = () => {
  return (
    <>
    {/* Full Page */}

      <div className="flex flex-row h-screen w-full border-2 border-red-400">

        {/* Navigation bar */}
        <aside className="h-screen w-3/12 border-2 border-blue-400 pl-32">
            Hello
        </aside>

        {/* Middle Section */}
        <div className="w-6/12 border-2 border-black"></div>

        {/* Search Section */}
        <div className="h-screen w-3/12 border-2 border-yellow-500 " >
          World
        </div>

      </div>
    </>
  );
};

export default Home;
