import Header from "../components/Header";
import IconCard from "../components/IconCard";
import { useState } from "react";
import icons from "../utils/icons";

export default function Home() {
  const [isDark, setDark] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center min-h-screen">
      <Header blog={true} onDarkChange={(val) => setDark(val)} />
      <div className="flex flex-wrap max-w-5xl mx-auto justify-between">
        {icons.map((icon) => {
          return <IconCard key={icon} icon={icon} isDark={isDark} />;
        })}
      </div>
    </div>
  );
}
