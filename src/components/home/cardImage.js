import Image from "next/image";
import React from "react";

const CardImage = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-evenly items-center py-8 flex-col">
      <div className="mb-4">
        <Image
          src="https://res.cloudinary.com/dwsmc6rqr/image/upload/v1654128586/image_sup_v8i8b8.jpg"
          alt="image"
          className="rounded-full"
          width={296}
          height={296}
          objectFit='cover'
          unoptimized={true}
        />
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="h-8 w-8 flex justify-center items-center"
      >
        {theme !== "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-textGlobalDark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-textGlobalLight"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CardImage;
