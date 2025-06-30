import React from "react";
import sparkleStrokes from "../../../public/sparklestrokes.svg";
import Image from "next/image";
import { cn } from "../utils/cn";

export default function LabelSparkle(props: {
  className?: string;
  text: string;
  isLeft?: boolean;
  small?: boolean;
}) {
  const { className, text, isLeft, small } = props;
  return (
    <div
      className={cn(
        `font-space-grotesk  border-black border-[8px] py-[10px] px-[25px] lg:px-[45px] text-[14px] sm:text-[29px] rounded-[92px] relative`,
        className,
        {
          "border-[4px] px-[25px] py-[10px] !w-fit  translate-0 flex items-center justify-center font-bold ":
            small,
        }
      )}
    >
      {text}
      <Image
        src={sparkleStrokes}
        alt="Sparkle Strokes"
        className={cn("inline-block absolute top-[-60px]", {
          " left-[-50px] rotate-[-90deg]": isLeft,
          " right-[-50px]": !isLeft,
          "size-[40px]  top-[-30px] right-[-30px]": small,
          "left-[-30px]": small && isLeft,
        })}
      />
    </div>
  );
}
