import { useEffect, useState } from "react";
import Image from "next/image";
import Moon from "../icons/moon.svg";
import Sun from "../icons/sun.svg";

const Header = ({ onDarkChange }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    let theme = localStorage.getItem("dark-theme");
    if (theme) {
      body.classList.add("dark");
      setDark(true);
      onDarkChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeTheme = () => {
    onDarkChange(!isDark);
    setDark(!isDark);
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.removeItem("dark-theme");
    } else {
      body.classList.add("dark");
      localStorage.setItem("dark-theme", true);
    }
  };
  return (
    <header class="px-4 sm:px-6 lg:px-16">
      <div class="max-w-5xl mx-auto divide-y divide-black divide-opacity-10 dark:divide-slate-800">
        <div class="py-6 flex items-center text-sm leading-5">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <h3 className="ml-2 tracking-wide font-normal">Vector Icons</h3>
          <div
            class="flex space-x-10 ml-auto cursor-pointer w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
            onClick={changeTheme}
          >
            {isDark ? (
              <Sun width={30} height={30} fill="#fff" />
            ) : (
              <Moon width={30} height={30} fill="#000" />
            )}
          </div>
        </div>
        <div class="sm:pt-4 pb-10 sm:pb-14 flex flex-wrap items-center">
          <div class="w-full flex-none text-center xl:w-auto xl:flex-auto xl:text-left mt-10">
            <h1 class="font-display text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10">
              Open source, hand-crafted SVG icons
              <span class="sm:block text-sky-400">
                by the makers of{" "}
                <a
                  className="text-sky-700"
                  href="https://ak-palette.netlify.app/"
                >
                  Palette Design System
                </a>
                .
              </span>
            </h1>
          </div>
          <div class="w-full sm:w-auto flex-none flex flex-col-reverse sm:flex-row sm:items-start space-y-3 space-y-reverse sm:space-y-0 sm:space-x-4 mt-10 mx-auto xl:mx-0">
            <div>
              <a href="https://github.com" class="group flex">
                <div class="w-full sm:w-auto inline-flex items-center justify-center text-sky-500 font-medium leading-none bg-white dark:bg-gray-900 rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-transparent transform-gpu group-hover:-translate-y-1 transition-all duration-150">
                  <span>Documentation</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
