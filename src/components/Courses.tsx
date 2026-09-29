import Button from "./Button";
import courseBg from "../assets/coursecardbg.png";
import student from "../assets/coursecardboy.png";

const courses = ["A1", "A2", "B1", "B2"].map((level) => ({
  level,
  title: "Build your German foundation",
  description:
    "Learn essential vocabulary, grammar and real-life communication skills.",
}));

export default function Courses() {
  return (
    <section className="bg-[#f7fafe] pt-11">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Section heading */}
        <div className="  mb-9 ">
<div className="mb-2 flex flex-col items-center gap-2">
  <span className="h-[3px] w-5 bg-[#F5B400]" />

  <span
    className="
      text-[10px] font-semibold
      uppercase tracking-[1.5px]
      text-[#0b294d]
    "
  >
    Our Courses
  </span>
</div>

          <h2
            className="flex justify-center
              text-[30px] font-bold leading-[1.15] 
              tracking-[-0.5px] text-[#0b294d]
            "
          >
            Professional{" "}
            <span className="text-[#F5B400]">German Programs</span>
          </h2>
        </div>

        {/* Course cards */}
        <div
          className="
            grid grid-cols-4 gap-8
            max-[992px]:grid-cols-2
            max-[560px]:grid-cols-1
          "
        >
          {courses.map(({ level, title, description }) => (
            <article
              key={level}
              className="
                overflow-hidden rounded-2xl
                bg-white
                shadow-[0_8px_24px_rgba(20,50,100,0.08)]
              "
            >
              {/* Card image */}
              <div
                className="
                  relative h-[155px]
                  overflow-hidden
                  bg-cover bg-center
                "
                style={{ backgroundImage: `url(${courseBg})` }}
              >
                {/* Course label */}
                <div
                  className="
                    absolute bottom-[26px] left-[22px]
                    z-10 text-white
                  "
                >
                  <span className="block text-[16px] font-semibold leading-none">
                    German
                  </span>

                  <strong
                    className="
                      mt-0.5 block
                      text-[38px] font-bold leading-[1.1]
                    "
                  >
                    {level}
                  </strong>

                  <i
                    className="
                      mt-2 block h-1 w-[38px]
                      rounded-sm bg-[#F5B400]
                    "
                  />
                </div>

                {/* Student */}
                <img
                  src={student}
                  alt="Student holding books"
                  className="
                    absolute bottom-0 right-0
                    h-full w-auto max-w-none
                  "
                />
              </div>

              {/* Card body */}
              <div className="px-[18px] pb-[22px] pt-5">
                <h3
                  className="
                    text-[16px] font-semibold
                    leading-[1.3] text-[#0F3B6E]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    my-[10px] mb-5
                    text-[13px] font-normal
                    leading-[1.55] text-[#7a8496]
                  "
                >
                  {description}
                </p>

                <Button
                  variant="outline-navy"
                  arrow
                  className="w-full px-3 py-[11px] text-[12px]"
                >
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View more */}
        <div className="mt-10 text-center">
          <Button variant="navy" arrow className="px-[38px] py-[15px] text-[12px]">
            View More Courses
          </Button>
        </div>
      </div>
    </section>
  );
}