import React from "react";

const Ping = () => {
  return (
    <div className="relative z-10">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]  ">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full  bg-red-500 opacity-75"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-red-600"></span>
        </span>
      </div>
    </div>
  );
};
export default Ping;
