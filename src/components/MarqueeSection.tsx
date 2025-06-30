import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="bg-black text-white py-[22px]">
      <Marquee gradient={false} speed={50}>
        {[...Array(30)].map((_, index: number) => {
          return (
            <span
              className="font-space-grotesk mr-[24px] font-[700] text-xl"
              key={index}
            >
              Let&apos;s Build Together
            </span>
          );
        })}
      </Marquee>
    </div>
  );
}
