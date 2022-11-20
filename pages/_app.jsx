import "../styles/globals.css";
import "uno.css";
import "toastify-js/src/toastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-transition overflow-hidden min-h-screen font-sans bg-[#F5F8FA]	dark:bg-[#010001] text-[#5B6079]	dark:text-[#bbb] relative ">
      {" "}
      <Head>
        <title>Vector Icons</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
