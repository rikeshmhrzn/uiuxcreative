"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { cn } from "./utils/cn";

export default function NavBar() {
  const [openNavBar, setOpenNavBar] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const closeNavBar = () => {
    if (window.innerWidth <= 635) {
      setOpenNavBar(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 635) {
      setOpenNavBar(false);
      setIsMobile(true);
    }
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0  sm:pt-8  w-full flex   justify-center items-center ",
        {
          "z-100": !isMobile,
          "z-[9999999]": isMobile,
        }
      )}
    >
      <button
        type="button"
        className={` sm:hidden shadow-2xl rounded-full cursor-pointer backdrop-blur-2xl text-black p-2 fixed ${
          openNavBar ? "right-[20px] top-[20px]" : "right-[20px] top-[20px]"
        } sm:border z-100 `}
        onClick={() => {
          setOpenNavBar(!openNavBar);
        }}
      >
        {!openNavBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </button>
      {openNavBar && (
        <nav className="bg-[url('/herogradient.svg')] sm:bg-none flex  items-start sm:items-center justify-start sm:justify-center  flex-col sm:flex-row gap-0  text-[18px] md:text-lg text-black bg-white backdrop-blur-2xl w-screen sm:w-fit sm:max-w-[90%]  px-[25px]  sm:px-[20px] py-[89px] sm:py-2 rounded-0 sm:rounded-[100px] shadow-2xl h-[100vh]  sm:h-fit ">
          <Link
            href="/#work"
            onClick={() => {
              closeNavBar();
            }}
            className="py-[6px] px-[16px] "
          >
            Work
          </Link>

          <Link
            href="/#process"
            onClick={() => {
              closeNavBar();
            }}
            className="py-[6px] px-[16px] "
          >
            Process
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScS1Yym02Io3a9Y5GnPn4-fssA-U0FtyPMkNt-gIBVluV7vpQ/viewform"
            onClick={() => {
              closeNavBar();
            }}
            className="py-[6px] px-[16px] "
            target="_blank"
          >
            Learn UI/UX Design
          </Link>
          <Link
            href="https://wa.me/9779813270713?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              closeNavBar();
            }}
            className="py-[6px] px-[16px] button-gradient remove-btn-gradient-for-sm  sm:text-white  rounded-[30px] flex items-center justify-center gap-2 hover:scale-[1.05] transition-all duration-300 "
          >
            Start Project{" "}
            <svg
              width="20"
              height="7"
              viewBox="0 0 20 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                d="M8.12987 4.43066C9.02262 4.53529 9.90351 4.51901 10.7924 4.58744C11.2226 4.62058 12.1774 4.56897 12.512 4.77159C12.0095 5.11807 9.04366 5.20726 10.2007 6.53346C10.959 7.4026 12.9295 6.81198 13.8443 6.70076C15.1345 6.54386 21.2627 6.80089 19.7663 4.1294C19.1848 3.09132 17.272 2.4346 16.2598 1.95643C14.7887 1.26146 13.2921 0.748787 11.7509 0.242857C10.8799 -0.0431269 9.02542 -0.278039 10.5592 0.77059C11.7351 1.57457 13.3435 2.07332 14.3625 3.04614C12.5832 3.12532 10.754 2.71807 8.92267 2.82935C6.77101 2.96007 4.58024 2.85795 2.42471 2.85342C2.09021 2.85272 -0.356482 2.56586 0.0441971 3.47532C0.297312 4.04981 1.84099 3.96824 2.32863 4.00791C3.06929 4.06815 3.77205 4.1655 4.50866 4.24036C5.06457 4.29689 5.62914 4.27871 6.18688 4.31519C6.759 4.35259 7.57304 4.60152 8.12987 4.43066C7.64745 4.57868 9.00894 4.53372 8.12987 4.43066Z"
                fill="white"
              />
            </svg>
          </Link>
        </nav>
      )}
    </header>
  );
}
