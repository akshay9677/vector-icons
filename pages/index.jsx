import Header from "../components/Header";
import Footer from "../components/Footer";
import IconCard from "../components/IconCard";
import { useEffect, useState } from "react";
import icons from "../utils/icons";
import SearchIcon from "../icons/search.svg";

export default function Home() {
  const [isDark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [iconList, setIconList] = useState(icons);
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    if (search === "") {
      setIconList(icons);
    } else {
      let filteredIcons = icons.filter((icon) => icon.includes(search));
      setIconList(filteredIcons);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header onDarkChange={(val) => setDark(val)} />
      <div className="flex flex-col max-w-5xl mx-auto w-full">
        <div className="flex items-center shadow-md rounded-lg px-5 py-1 bg-white dark:bg-gray-900 border-transparent border-1.5 hover:border-sky-600 focus-within:border-sky-600 input-shadow">
          <SearchIcon
            width={28}
            height={28}
            alt="search"
            fill={isDark ? "#fff" : "#000"}
          />
          <input
            className="p-3 w-full"
            value={search}
            onChange={onSearchChange}
            placeholder={`Search all ${icons.length} icons`}
          />
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          {iconList.map((icon) => {
            return <IconCard key={icon} icon={icon} isDark={isDark} />;
          })}
        </div>
      </div>
      <Footer isDark={isDark} />
    </div>
  );
}
