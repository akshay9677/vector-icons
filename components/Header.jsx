import { useEffect, useState } from "react";
import Image from "next/image";
import Moon from "../icons/moon.svg";
import Sun from "../icons/sun.svg";
import Twitter from "../public/twitter.svg";
import Github from "../public/github.svg";

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
    <header className="px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto ">
        <div className="py-3 flex items-center text-sm leading-5 justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <h3 className="ml-1 text-lg font-sans font-medium text-sky-900 dark:text-gray-200">
              Vector Icons
            </h3>
          </div>
          <div className="flex items-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex item-center text-gray-700 dark:text-gray-200 mr-3"
              href="https://twitter.com/intent/tweet?text=Check%20out%20Vectoricon%20by%20%40_akshay_kannan_%20https%3A%2F%2Fakshaykannan.tech%20"
            >
              <Twitter
                height={20}
                width={20}
                className="mr-2"
                fill={isDark ? "#fff" : "#172948"}
              />
              Share on Twitter
            </a>
            |
            <div
              className="ml-1 cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={changeTheme}
            >
              {isDark ? (
                <Sun width={28} height={28} fill="#fff" />
              ) : (
                <Moon width={28} height={28} fill="#172948" />
              )}
            </div>
          </div>
        </div>
        <div className=" pb-8 sm:pb-10 flex flex-wrap items-center">
          <div className="w-full flex-none text-center xl:w-auto xl:flex-auto xl:text-left mt-10">
            <h1 className="font-display text-3xl leading-9 font-semibold sm:text-4xl sm:leading-10">
              Simple, hand-crafted SVG icons
              <span className="sm:block text-sky-400">
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
          <div className="w-full sm:w-auto flex-none flex flex-col-reverse sm:flex-row sm:items-start space-y-3 space-y-reverse sm:space-y-0 sm:space-x-4 mt-10 mx-auto xl:mx-0">
            <a
              href="https://github.com/akshay9677/vector-icons"
              className="group flex w-full sm:w-auto inline-flex items-center justify-center text-sky-500 font-medium leading-none bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-lg py-3 px-5 border border-transparent transform-gpu hover:-translate-y-1 transition-all duration-150"
            >
              Documentation
              <Github height={20} width={20} className="ml-2" fill="#0BA5E9" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
