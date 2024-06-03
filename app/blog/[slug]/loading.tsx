import React from "react";

function Loading() {
  return (
    <div>
      <div className="flex flex-col min-h-screen px-4 md:px-20 lg:px-40">
        <div>
          <div className="bg-slate-400/10 animate-pulse inline-flex px-2 hover:opacity-75 rounded-md gap-2 items-center">
            {/* <ArrowLeft className="w-4 h-4" /> */}
          </div>
        </div>

        <div className="mt-6 h-10">
          <h1 className="text-xl bg-gray-400/10 animate-pulse font-extrabold md:text-2xl lg:text-3xl "></h1>

          <small className="bg-gray-400/10 animate-pulse"></small>

          <small className="ml-3  bg-gray-400/10 animate-pulse underline-offset-4 font-semibold bg-blue-600 px-1 py-1 rounded-md text-gray-200 h-4"></small>

          <div className="mt-6">
            <h1 className="h-6  bg-gray-400/10 animate-pulse"></h1>
            <div className="rounded-md bg-gray-400/10 animate-pulse mt-4 h-20 object-contain object-center"></div>
          </div>

          <p className=" mt-4 h-20 bg-gray-400/10 animate-pulse"></p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
