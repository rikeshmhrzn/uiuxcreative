import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowImage from "../../../public/arrow.svg";
import NavBar from "@/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="my-width m-auto">
        <div className="py-10 pb-40">
          <Link href="/" className="z-[999999] relative block">
            <Image src={arrowImage} alt="arrow" className="rotate-180" />
          </Link>
          <NavBar />
          {/* <Link
            href="https://wa.me/9779813270713?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-[40px] right-0 button-gradient text-white py-4 px-11 rounded-[100px_0_0_100px] font-bold backdrop-blur-2xl"
          >
            Start New Project
          </Link> */}
        </div>
        {children}
      </div>

      <Footer />
    </div>
  );
}
