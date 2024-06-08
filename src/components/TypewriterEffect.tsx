"use client";
import { Link } from "react-router-dom";
import { Typewriter } from "../components/ui/Typewriter";

export function TypewriterEffect() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-800 dark:text-gray-800 text-dark-800  mb-10">
        The road to freedom starts from here
      </p>
      <Typewriter words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <Link to='/signup' className="w-40 h-10 rounded-xl bg-blue-700 text-white border border-black  text-sm">
          Signup
        </Link>
      </div>
    </div>
  );
}
