import Image from "next/image";
import Link from "next/link";
import React from "react";
import HoverLabel from "./HoverLabel";

interface ProductPageSectionProps {
  logoBgColor?: string;
  logo: string;
  title: string;
  description: string;
  tags: string[];
  topImage: string;
  bottomImage: string;
  visitLink: string;
}

export default function ProductPageSection(props: ProductPageSectionProps) {
  const {
    logoBgColor,
    logo,
    title,
    description,
    tags,
    topImage,
    bottomImage,
    visitLink,
  } = props;
  return (
    <div className="flex flex-col items-center justify-center pb-32">
      <div
        className={`size-[100px] rounded-[20px] mb-[40px] flex items-center justify-center`}
        style={{ backgroundColor: logoBgColor || "#014066" }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={60}
          height={60}
          className="!w-[60px] !h-[60px]"
        />
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl mb-5">{title}</h1>
      <p className="w-[780px] max-w-[90%] text-center text-base sm:text-2xl mb-[60px]">
        {description}
      </p>
      <div className="flex gap-[20px] mb-[60px]">
        {tags.map((item: string, index: number) => {
          return (
            <div
              key={index}
              className="bg-[#FFCF24] rounded-[100px] py-[10px] px-[30px]"
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="flex items center gap-[40px] flex-col w-full ">
        <HoverLabel label={`Visit ${title}`}>
          <Link
            href={visitLink || "#"}
            className="w-full block bg-[#F5F5F5] rounded-2xl md:rounded-[100px] p-[20px] md:p-[46px_154px]"
          >
            <Image
              src={topImage}
              alt="Top Image"
              width={1366}
              height={600}
              className="!w-full h-fit  "
              quality={100}
            />
          </Link>
        </HoverLabel>
        {bottomImage?.length > 0 && (
          <>
            {" "}
            <HoverLabel label={`Visit ${title}`}>
              <Link
                href={visitLink || "#"}
                className="w-full block bg-[#F5F5F5] rounded-2xl md:rounded-[100px] p-[20px] md:p-[95px_120px]"
              >
                <Image
                  src={bottomImage}
                  alt="Top Image"
                  width={1366}
                  height={600}
                  className="!w-full h-fit  "
                  quality={100}
                />
              </Link>
            </HoverLabel>
          </>
        )}
      </div>
    </div>
  );
}
