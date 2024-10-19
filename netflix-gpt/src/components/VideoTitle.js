import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 w-screen max-w-screen box-border bg-gradient-to-r from-black aspect-video mx-auto absolute overflow-hidden">
      <h1 className="text-2xl md:text-6xl text-white font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div className="">
        <button className="mt-3 bg-white text-black py-1 px-3 md:p-4 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          <svg
            className="w-6 h-6 inline-block text-black mx-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 4l8 6-8 6V4z" />
          </svg>
          Play
        </button>

        <button className="hidden md:inline-block bg-black text-white p-4 px-12 text-xl rounded-lg  mx-2">
          <svg
            className="w-6 h-6 inline-block text-white mx-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
              fontFamily="Arial"
              fontWeight="bold"
            >
              i
            </text>
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
