import Twitter from "../public/twitter.svg";

const Footer = ({ isDark }) => {
  return (
    <footer className="px-5 pt-8">
      <div className="flex justify-between max-w-5xl mx-auto border-t-1 border-slate-200 dark:border-gray-900 py-5">
        <div className="text-sm">
          By{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/_akshay_kannan_"
            className="text-blue-500 hover:underline ml-0.5"
          >
            @_akshay_kannan_
          </a>
        </div>
        <div className="text-sm">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
