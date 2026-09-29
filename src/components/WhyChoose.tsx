import {
  StudentIcon,
  BookOpen,
  GraduationCap,
  ChatCircleText,
  Headset,
  ChartLineUp,
} from "@phosphor-icons/react";
import Button from "./Button";

const whyChoose = [
  {
    id: 1,
    icon: "user",
    title: "Experienced Instructors",
    text: "Learn from qualified and dedicated trainers who make learning clear, practical and engaging.",
  },
  {
    id: 2,
    icon: "book",
    title: "Structured Learning",
    text: "A well-planned curriculum from A1 to C2 with a clear path, regular practice and continuous assessment.",
  },
  {
    id: 3,
    icon: "cap",
    title: "Exam Preparation",
    text: "Focused training for Goethe, TELC and other internationally recognized German exams.",
  },
  {
    id: 4,
    icon: "chat",
    title: "Real-Life Communication",
    text: "Build confidence to use German in everyday situations, studies and professional life.",
  },
  {
    id: 5,
    icon: "headset",
    title: "Personal Support",
    text: "Get individual guidance, doubt clearance and motivation throughout your learning journey.",
  },
  {
    id: 6,
    icon: "chart",
    title: "Measurable Progress",
    text: "Track your improvement with regular feedback and achieve your next level with confidence.",
  },
];

const icons = {
  user: StudentIcon,
  book: BookOpen,
  cap: GraduationCap,
  chat: ChatCircleText,
  headset: Headset,
  chart: ChartLineUp,
};

export default function WhyChoose() {
  return (
    <section className="bg-white py-11">
      <div
        className="
          mx-auto grid w-full max-w-7xl
          grid-cols-[320px_1fr]
          gap-[50px]
          px-4
          max-[992px]:grid-cols-1
        "
      >
        {/* Intro */}
        <div>
          {/* Eyebrow */}
          <span
            className="
              inline-flex items-center
              text-[10.5px] font-semibold
              uppercase tracking-[1.5px]
              text-[#64748B]
            "
          >
            <i className="mr-2 inline-block h-[3px] w-4 bg-[#F5B400]" />
            Why Choose Aspire
          </span>

          {/* Title */}
          <h2
            className="
              my-[14px] mb-4
              text-[28px]
              font-bold
              leading-[1.3]
              text-[#0B294D]
            "
          >
            Learn with purpose.{" "}
            <span className="text-[#F5B400]">
              Grow with confidence.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mb-[26px]
              text-[14px]
              font-normal
              leading-[1.65]
              text-[#55617A]
            "
          >
            At Aspire Academy, we go beyond language classes. We provide
            the right guidance, structure and support to help you build
            real skills and create better opportunities for your future
            in Germany.
          </p>

          {/* Button */}
          <Button variant="navy" arrow>
            Explore Our Courses
          </Button>

          {/* Footnote */}
          <span
            className="
              mt-5
              block
              text-[10.5px]
              font-semibold
              uppercase
              leading-none
              tracking-[1.5px]
              text-[#64748B]
            "
          >
            <i className="mr-2 inline-block h-[3px] w-4 bg-[#F5B400]" />
            German for a brighter tomorrow
          </span>
        </div>

        {/* Features */}
        <div
          className="
            grid
            grid-cols-3
            gap-x-10
            gap-y-9
            max-[992px]:grid-cols-2
            max-[560px]:grid-cols-1
          "
        >
          {whyChoose.map(({ id, icon, title, text }, index) => {
            const Icon = icons[icon as keyof typeof icons];

            return (
              <div
  key={id}
  className={`
    border-l border-[#E5EAF2]
    pl-5
    max-[560px]:border-l-0
    max-[560px]:pl-0
  `}
>
  {/* Number + Icon */}
  <div className="mb-2.5 flex items-center gap-3">
    <span
      className="
        text-[12px]
        font-bold
        leading-none
        text-[#F5B400]
      "
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <Icon
      size={22}
      weight="regular"
      className="text-[#0F3B6E]"
    />
  </div>

  {/* Title */}
  <h3
    className="
      mb-2
      text-[15px]
      font-semibold
      leading-[1.3]
      text-[#0F3B6E]

    "
  >
    {title}
  </h3>

  {/* Description */}
  <p
    className="
      text-[13px]
      font-normal
      leading-[1.6]
      text-[#7A8496]
    "
  >
    {text}
  </p>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}