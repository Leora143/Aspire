import {
  BookOpen,
  UsersThree,
  ChartBar,
  Phone,
} from "@phosphor-icons/react";
import Button from "./Button";
import ctaBg from "../assets/footerbg.png";

const items = [
  {
    icon: BookOpen,
    title: "Language",
    text: "Learn for a brighter tomorrow.",
  },
  {
    icon: UsersThree,
    title: "Confidence",
    text: "Build skills with expert guidance.",
  },
  {
    icon: ChartBar,
    title: "Opportunities",
    text: "Unlock a world of possibilities.",
  },
];

export default function GetInTouch() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#07366B]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      
      <div className="absolute inset-0 bg-[#07366B]/30" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[280px]
          max-w-[1400px]
          items-center
          justify-between
          px-[60px]
          py-8
          max-[992px]:px-8
          max-[768px]:flex-col
          max-[768px]:items-start
          max-[768px]:gap-8
        "
      >
        <div className="w-[500px] shrink-0">
          <div className="mb-2 flex flex-col items-start gap-2.5">
            

            <span
              className="
                text-[9px]
                
                uppercase
                tracking-[2px]
                text-[#CDD8EA]
              "
            >
              Get in Touch
            </span>
            <span className="h-[3px] w-8 bg-[#F5B400]" />
          </div>

          {/* Heading */}
          <h2
            className="
              mb-5
              text-[35px]
              font-bold
              leading-[1.08]
              tracking-[-0.4px]
              text-white
            "
          >
            Your German Journey
            <br />
            <span className="text-[#F5B400] text-[35px]">Starts Here.</span>
          </h2>

          {/* Button */}
          <Button
            variant="Yellow"
            arrow
            icon={<Phone size={14} className="!text-extrabold "
            />}
            className="
              h-[52px]
              w-[350px]
              justify-center
              px-5
              py-0
              text-[14px]
              !font-extrabold
            "
          >
            Talk to Us
          </Button>
        </div>

        {/* RIGHT ITEMS */}
        <div
          className="
            flex
            items-start
            gap-[68px]
            pr-[170px]
            max-[1100px]:gap-10
            max-[1100px]:pr-[120px]
            max-[992px]:pr-0
            max-[768px]:flex-wrap
          "
        >
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="w-[105px] shrink-0 text-white"
            >
              {/* Icon */}
              <Icon
                size={25}
                weight="regular"
                className="mb-2.5 text-[#F5B400]"
              />

              {/* Title */}
              <strong
                className="
                  mb-1.5
                  block
                  text-[18px]
                  font-bold
                  leading-none
                "
              >
                {title}
              </strong>

              {/* Description */}
              <p
                className="
                  text-[15px]
                  font-normal
                  leading-[1.45]
                  text-[#B7C3DA]
                "
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}