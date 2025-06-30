import React from "react";
import MarqueeSection from "./MarqueeSection";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <MarqueeSection />
      <div className="py-20  md:py-[200px] pb-[80px] sm:!pb-[140px] flex flex-col items-center justify-center gap-[100px]">
        <div className="flex flex-col-reverse gap-5  md:block relative w-fit items-center justify-center">
          <Link
            href="https://wa.me/9779813270713?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-gradient text-white p-[13px_38px] sm:py-[28px] sm:px-[70px] md:px-[90px] font-bold text-[14px] sm:text-3xl md:text-4xl rounded-[100px] cursor-pointer hover:scale-[1.05] transition-all duration-300 w-fit ">
              CONNECT
            </button>
          </Link>

          <div className="w-full md:w-[290px] font-cursive text-[28px] sm:text-[32px] leading-[100%] relative md:absolute font-bold right-0 md:right-[-190px] top-0  md:top-[-90px] md:rotate-8 text-center md:text-left">
            Tap this &lsquo;tiny&rsquo; button to start your project =)
          </div>
        </div>
      </div>
      <section className="my-width m-auto flex flex-wrap items-center justify-center gap-10 md:gap-[100px] text-center mb-[80px] tex-xl sm:text-2xl leading-1.5">
        <Link href="mailto:uiuxcreative2021@gmail.com" className="">
          <Image
            src="/Message.svg"
            alt="message"
            width={32}
            height={32}
            className="inline-block mr-2 size-[22px] sm:size-[32px]"
          />
          uiuxcreative2021@gmail.com
        </Link>
        <Link href={"phone:+9779813270713"} className="">
          <Image
            src="/Call.svg"
            alt="call"
            width={32}
            height={32}
            className="inline-block mr-2 size-[22px] sm:size-[32px]"
          />
          +977 9813270713
        </Link>
        <div className="flex items-center justify-center gap-6">
          <Link
            href="
https://www.instagram.com/ui.uxcreative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>
          <Link
            href="https://dribbble.com/rkmhrzn18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Dribble.svg"
              alt="Dribble"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@uiuxcreative18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Tiktok.svg"
              alt="Tiktok"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link>

          {/* <Link href="/">
            <Image
              src="/Youtube.svg"
              alt="Youtube"
              width={40}
              height={40}
              className="inline-block hover:translate-y-[-5px] transition-all duration-300"
            />
          </Link> */}
        </div>
      </section>
    </footer>
  );
}
