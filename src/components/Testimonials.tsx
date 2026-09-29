import {
  CaretLeft,
  CaretRight,
  Star,
  Quotes,
  User,
} from "@phosphor-icons/react";

import avatarSarah from "../assets/quote1.jpg";
import avatarMark from "../assets/quote2.jpg";
import avatarElena from "../assets/quote3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "University Dean",
    avatar: avatarSarah,
    text: "What impressed me most about EduSaaS is how clearly it organizes the entire learning experience. I can monitor student engagement, review course completion data, and adjust lessons easily. The platform provides powerful insights that help educators continuously improve their courses.",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Senior Instructor",
    avatar: avatarMark,
    text: "Managing online courses used to be complicated, but EduSaaS simplified the entire workflow. From building structured lessons to tracking student performance, everything is handled in one intuitive dashboard. The platform saves time and helps educators focus more on teaching instead of administration.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Online Student",
    avatar: avatarElena,
    text: "What impressed me most about EduSaaS is how clearly it organizes the entire learning experience. I can monitor student engagement, review course completion data, and adjust lessons easily. The platform provides powerful insights that help educators continuously improve their courses.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Goethe B1 Student",
    avatar: null,
    text: "What impressed me most about EduSaaS is how clearly it organizes the entire learning experience. I can monitor student engagement, review course completion data, and adjust lessons easily.",
  },
];

function Stars() {
  return (
    <div className="mb-[14px] flex gap-[3px] text-[#F5B400]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          weight="fill"
        />
      ))}
    </div>
  );
}

type AvatarProps = {
  src: string | null;
  name: string;
};

function Avatar({ src, name }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="h-[38px] w-[38px] rounded-full object-cover"
      />
    );
  }

  return (
    <span
      className="
        flex h-[38px] w-[38px]
        shrink-0 items-center justify-center
        rounded-full
        bg-[#274A7C]
        text-[#CDD8EA]
      "
    >
      <User
        size={20}
        weight="fill"
      />
    </span>
  );
}

type TestimonialCardProps = {
  testimonial: (typeof testimonials)[number];
  active?: boolean;
};

function TestimonialCard({
  testimonial,
  active = false,
}: TestimonialCardProps) {
  return (
    <article
      className={`
        relative flex min-h-[316px] flex-col
        rounded-[14px]
        px-[26px] py-7
        ${
          active
            ? "z-10 scale-[1.04] bg-[#09234A] shadow-[0_18px_36px_rgba(9,35,74,0.28)]"
            : "bg-[#0F3B6E]"
        }
      `}
    >
      {/* Quote icon */}
      {active && (
        <span
          className="
            absolute -right-[22px] -top-4
            flex h-[34px] w-[34px]
            items-center justify-center
            rounded-full
            bg-[#F5B400]
            text-[#09234A]
          "
        >
          <Quotes
            size={18}
            weight="fill"
          />
        </span>
      )}

      {/* Stars */}
      <Stars />

      {/* Testimonial */}
      <p
        className="
          mb-5
          text-[13.5px]
          font-normal
          leading-[1.65]
          text-[#CDD8EA]
        "
      >
        {testimonial.text}
      </p>

      {/* User */}
      <div
        className="
          mt-auto
          flex items-center gap-3
          border-t-2 border-[#F5B400]
          pt-[14px]
        "
      >
        <Avatar
          src={testimonial.avatar}
          name={testimonial.name}
        />

        <div>
          <strong
            className="
              block
              text-[13px]
              font-semibold
              leading-[1.3]
              text-white
            "
          >
            {testimonial.name}
          </strong>

          <span
            className="
              block
              text-[10px]
              font-medium
              leading-[1.4]
              tracking-[0.5px]
              text-[#9FB0CB]
            "
          >
            {testimonial.role.toUpperCase()}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const left = testimonials[0];
  const center = testimonials[1];
  const right = testimonials[2];

  return (
    <section className="bg-white py-[44px]">
      <div className="mx-auto w-full max-w-[1310px] px-4">

        {/* Section heading */}
        <div className="text-center">

          {/* Yellow line + eyebrow */}
          <div className="mb-2 flex flex-col items-center gap-2">
            <span className="h-[3px] w-5 bg-[#F5B400]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[1.5px]
                text-[#0B294D]
              "
            >
              Student Experiences
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.5px]
              text-[#0B294D]
            "
          >
            Real stories.{" "}
            <span className="text-[#F5B400]">
              Real progress.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-[14px]
              max-w-[560px]
              text-[14px]
              font-normal
              leading-[1.6]
              text-[#55617A]
            "
          >
            Hear from our learners as they build confidence, achieve
            their goals, and create new opportunities with German.
          </p>
        </div>

        {/* Cards + arrows */}
        <div
          className="
            mx-auto
            mt-[44px]
            grid
            max-w-[1310px]
            grid-cols-[40px_repeat(3,minmax(0,1fr))_40px]
            items-center
            gap-3
          "
        >
          {/* Previous */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#EDF1F8]
              bg-white
              text-[#0F3B6E]
              shadow-[0_4px_10px_rgba(20,40,80,0.06)]
            "
          >
            <CaretLeft
              size={18}
              weight="bold"
            />
          </button>

          {/* Left card */}
          <TestimonialCard testimonial={left} />

          {/* Center card */}
          <TestimonialCard
            testimonial={center}
            active
          />

          {/* Right card */}
          <TestimonialCard testimonial={right} />

          {/* Next */}
          <button
            type="button"
            aria-label="Next testimonial"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#EDF1F8]
              bg-white
              text-[#0F3B6E]
              shadow-[0_4px_10px_rgba(20,40,80,0.06)]
            "
          >
            <CaretRight
              size={18}
              weight="bold"
            />
          </button>
        </div>

        {/* Carousel dots */}
        <div className="mt-[30px] flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D8DEEA]" />

          <span
            className="
              h-2
              w-[22px]
              rounded-[5px]
              bg-[#0F3B6E]
            "
          />

          <span className="h-2 w-2 rounded-full bg-[#D8DEEA]" />

          <span className="h-2 w-2 rounded-full bg-[#D8DEEA]" />
        </div>
      </div>
    </section>
  );
}