import {
  UsersThree,
  GraduationCap,
  BookOpenText,
  ChartLineUp,
} from "@phosphor-icons/react";

const stats = [
  {
    id: "faculty",
    value: "20+",
    label: "Experienced\nFaculty",
    icon: "users",
  },
  {
    id: "students",
    value: "10,000+",
    label: "Students\nTrained",
    icon: "cap",
  },
  {
    id: "courses",
    value: "10+",
    label: "Professional\nCourses",
    icon: "book",
  },
  {
    id: "success",
    value: "95%",
    label: "Exam\nSuccess Rate",
    icon: "chart",
  },
];

const icons = {
  users: UsersThree,
  cap: GraduationCap,
  book: BookOpenText,
  chart: ChartLineUp,
};

export default function Stats() {
  return (
    <section className="bg-white py-10">
      <div
        className="
          mx-auto grid w-full max-w-7xl
          grid-cols-[230px_1fr]
          items-center gap-[30px]
          px-4
          max-[992px]:grid-cols-1
        "
      >
        {/* Intro */}
        <div>
          <span
            className="
              inline-flex items-center gap-2
              text-[9.5px] font-semibold
              tracking-[1.5px] text-[#0b294d]
            "
          >
            <i className="h-[3px] w-4 bg-[#F5B400]" />
            OUR IMPACT
          </span>

          <h2
            className="
              my-2.5 mb-3.5
              text-[30px] font-bold leading-[1.05]
              tracking-[-0.5px] text-[#0b294d]
            "
          >
            Numbers
            <br />
            <span className="text-[#F5B400]">That Inspire.</span>
          </h2>

          <p className="text-[14px] leading-[1.6] text-[#55617a]">
            A growing community of learners building a brighter future with
            German.
          </p>
        </div>

        {/* Stats cards */}
        <div
          className="
            grid grid-cols-4 gap-4
            max-[992px]:grid-cols-2
          "
        >
          {stats.map(({ id, value, label, icon }) => {
            const Icon = icons[icon as keyof typeof icons];

            return (
              <div
                key={id}
                className="
                  h-[200px]
                  rounded-xl
                  border border-[#edf1f8]
                  bg-[#f7fafe]
                  px-3 pb-5 pt-6
                  text-center
                "
              >
                <span
                  className="
                    mb-4 inline-flex
                    h-[66px] w-[66px]
                    items-center justify-center
                    rounded-full
                    bg-[#eaf1fb]
                    text-[#0b294d]
                  "
                >
                  <Icon size={30} weight="duotone" />
                </span>

                <strong
                  className="
                    block text-[26px] font-bold
                    leading-none text-[#0b294d]
                  "
                >
                  {value}
                </strong>

                <span
                  className="
                    mx-auto my-2 block
                    h-[2px] w-3.5 bg-[#F5B400]
                  "
                />

                <p
                  className="
                    whitespace-pre-line
                    text-[12px] font-medium
                    leading-[1.4] text-[#55617a]
                  "
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}