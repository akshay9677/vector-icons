import { useEffect, useState } from "react";

const IconCard = ({ icon, isDark }) => {
  const [iconComponent, setIconComponent] = useState();

  useEffect(() => {
    getIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);
  const getIcon = async () => {
    let t = await import(`../icons/${icon}.svg`);
    setIconComponent(
      t.default({ width: 24, height: 24, fill: isDark ? "#fff" : "#000" })
    );
  };
  return (
    <div className="mb-5 flex flex-col items-center">
      <div className="dark:bg-[#0d0f10] hover:shadow-lg cursor-pointer flex flex-col rounded-2xl w-22 h-20 justify-center items-center p-5 border border-[#e5e7eb] dark:border-[#393A3C] hover:border-sky-500">
        {iconComponent}
      </div>
      <div className="mt-2 text-sm">{icon}</div>
    </div>
  );
};

export default IconCard;
