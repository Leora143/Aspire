import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";
import Button from "./Button";
import courseBg from "../assets/coursecardbg.png";
import student from "../assets/coursecardboy.png";

const courses = ["A1", "A2", "B1", "B2"].map((level) => ({
  id: `german-${level.toLowerCase()}`,
  level,
  title: "Build your German foundation",
  description:
    "Learn essential vocabulary, grammar and real-life communication skills.",
}));

export default function Courses() {
  return (
    <section className="bg-[#F7FAFE] py-20">
      <div className="mx-auto w-full max-w-[1170px] px-5">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase tracking-[2px] text-[#0F3B6E]">
            Our Courses
          </span>

          <span className="mx-auto mt-2.5 block h-[3px] w-[26px] rounded-sm bg-[#F5B400]" />

          <h2 className="mt-4 font-['Poppins',sans-serif] text-[34px] font-bold leading-[1.2] text-[#0F3B6E]">
            Learn German with Confidence
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] font-['Poppins',sans-serif] text-[13px] leading-[1.7] text-[#7A8496]">
            Build your German language skills with structured courses designed
            for real-life communication and future opportunities.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-4 gap-[22px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
          {courses.map(({ id, level, title, description }) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl bg-white font-['Poppins',sans-serif] shadow-[0_8px_24px_rgba(20,50,100,0.08)]"
            >
              {/* Card Image */}
              <div
                className="relative h-[155px] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${courseBg})` }}
              >
                <div className="absolute bottom-[26px] left-[22px] z-10 text-white">
                  <span className="block text-[16px] font-semibold leading-none">
                    German
                  </span>

                  <strong className="mt-0.5 block text-[38px] font-bold leading-[1.1]">
                    {level}
                  </strong>

                  <i className="mt-2 block h-1 w-[38px] rounded-sm bg-[#F5B400]" />
                </div>

                <img
                  src={student}
                  alt="Student holding books"
                  className="absolute bottom-0 right-0 h-full w-auto max-w-none"
                />
              </div>

              {/* Card Content */}
              <div className="px-[18px] pb-[22px] pt-5">
                <h3 className="text-[16px] font-semibold leading-[1.3] text-[#0F3B6E]">
                  {title}
                </h3>

                <p className="my-[10px] mb-5 text-[13px] font-normal leading-[1.55] text-[#7A8496]">
                  {description}
                </p>

                <Link
                  to="/course/$courseId"
                  params={{ courseId: id }}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#0F3B6E] bg-white px-4 py-[11px] text-[12px] font-semibold leading-none text-[#0F3B6E]"
                >
                  {/* <Button
                    variant="outline-navy"
                    arrow
                    className="w-full"
                  > */}
                    Learn More
                    <ArrowRight size={13} weight="bold" />
                  {/* </Button> */}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
<div className="mt-10 text-center">          \
  <Link to="/course">
           <Button variant="navy" arrow className="px-[38px] py-[15px] text-[12px]">
              View More Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}