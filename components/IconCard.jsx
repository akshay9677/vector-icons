import { useEffect, useState } from "react";
import download from "downloadjs";
import Toastify from "toastify-js";

const ActionButton = ({ onBtnClick, text }) => {
  return (
    <div
      onClick={onBtnClick}
      className="p-3 bg-gray-200 rounded-lg dark:bg-gray-800 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
    >
      {text}
    </div>
  );
};

const IconCard = ({ icon, isDark }) => {
  const [iconComponent, setIconComponent] = useState();
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    getIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);
  const getIcon = async () => {
    let t = await import(`../icons/${icon}.svg`);
    setIconComponent(
      t.default({
        width: 30,
        height: 30,
        fill: isDark ? "#fff" : "#172948",
      })
    );
  };
  const copySvg = () => {
    let svg = document.getElementById(`icon-${icon}`).innerHTML;

    navigator.clipboard.writeText(svg).then(() => {
      Toastify({
        text: "Svg copied to clipboard",
        position: "center",
        style: {
          color: !isDark ? "#000" : "#fff",
          background: !isDark ? "#ffffff" : "#111827",
          "box-shadow":
            "0 0 1px rgb(67 90 111 / 30%), 0 2px 4px -2px rgb(67 90 111 / 47%)",
          "border-radius": "5px",
        },
      }).showToast();
    });
  };
  const downloadSvg = () => {
    let svg = document.getElementById(`icon-${icon}`).innerHTML;
    download(svg, `${icon}.svg`, "image/svg+xml");
  };
  return (
    <div id="icon" className="mb-5 flex flex-col items-center">
      <div
        className="relative overflow-hidden hover:shadow-lg cursor-pointer flex flex-col rounded-2xl w-22 h-20 justify-center items-center p-5 border border-gray-300 dark:border-slate-800"
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <div id={`icon-${icon}`}>{iconComponent}</div>

        {showActions && (
          <div className="backdrop-blur-sm absolute w-full h-full flex flex-col items-center justify-center">
            <ActionButton onBtnClick={copySvg} text="Copy Svg" />
            <div className="my-1"></div>
            <ActionButton onBtnClick={downloadSvg} text="Download" />
          </div>
        )}
      </div>
      <div className="mt-2 text-sm">{icon}</div>
    </div>
  );
};

export default IconCard;
