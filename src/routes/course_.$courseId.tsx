import type { FC, ReactNode } from 'react';
import { createFileRoute, Link } from "@tanstack/react-router";
import CourseCard from "../components/CourseCard";
import RegisterForm from "../components/RegisterForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { courses, getCourseById } from "../data/courseData";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import {
  ArrowRight,
  DownloadSimple,
  ChartBar,
  Clock,
  Monitor,
  Medal,
  ChatCircle,
  Headphones,
  BookOpen,
  PencilSimple,
  Gear,
} from '@phosphor-icons/react';

import coursesHero from '../assets/coursebg.png';
import courseStudent from '../assets/coursecardboy.png';
import cologneSketch from '../assets/bridge.png';

interface IconItem {
  id: string;
  icon: ReactNode;
  title: string;
  text: string;
}

const skills = (examName: string): IconItem[] => [
  {
    id: 'speaking',
    icon: <ChatCircle size={26} weight="regular" />,
    title: 'Speaking',
    text: 'Learn to speak in real-life situations with confidence and clarity.',
  },
  {
    id: 'listening',
    icon: <Headphones size={26} weight="regular" />,
    title: 'Listening',
    text: 'Understand commonly used words and expressions in everyday conversations.',
  },
  {
    id: 'reading',
    icon: <BookOpen size={26} weight="regular" />,
    title: 'Reading',
    text: 'Read and understand simple texts, signs, messages and notices.',
  },
  {
    id: 'writing',
    icon: <PencilSimple size={26} weight="regular" />,
    title: 'Writing',
    text: 'Write short notes, messages and simple personal information.',
  },
  {
    id: 'grammar',
    icon: <Gear size={26} weight="regular" />,
    title: 'Grammar',
    text: 'Build a strong foundation in basic German grammar with easy explanations.',
  },
  {
    id: 'exam-preparation',
    icon: <Medal size={26} weight="regular" />,
    title: 'Exam Preparation',
    text: `Focused training and practice for ${examName}, including mock tests and expert guidance.`,
  },
];

const Eyebrow: FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center gap-2.5 font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#0b2a55]">
    <i className="inline-block h-[3px] w-[18px] bg-[#f5b400]" />
    {label}
  </span>
);

const iconBg = (index: number) => (index % 2 === 0 ? 'bg-[#fdf1d8]' : 'bg-[#e6eefb]');

const CourseDetail: FC = () => {
  const { courseId } = Route.useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <>
        <div className="mx-auto flex min-h-[50vh] w-full max-w-[1170px] flex-col items-center justify-center px-5 text-center">
          <h1 className="font-['Poppins',sans-serif] text-[28px] font-bold text-[#0b2a55]">Course not found</h1>
          <Link
            to="/course"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0b2a55] px-5 py-3 font-['Poppins',sans-serif] text-xs font-semibold text-white"
          >
            Back to courses <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const [name, level] = course.fullName.split(' ');

  const infoTiles = [
    { id: 'level', icon: <ChartBar size={24} weight="regular" />, label: 'Course Level', value: course.levelLabel },
    { id: 'duration', icon: <Clock size={24} weight="regular" />, label: 'Duration', value: course.duration },
    { id: 'mode', icon: <Monitor size={24} weight="regular" />, label: 'Mode of Learning', value: course.mode },
    { id: 'cert', icon: <Medal size={24} weight="regular" />, label: 'Certification Support', value: course.certification },
  ];

  const relatedCourses = courses
    .filter((item) => item.track === 'German' && item.id !== course.id)
    .slice(0, 4);

  return (
    <>
      <div className="bg-[#fafbfd] font-['Inter',sans-serif] text-[#5f6b7d]">
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex min-h-[380px] items-center overflow-hidden bg-gradient-to-r from-[#0b2a55] to-[#0a3a80]">
          <div
            className="absolute inset-y-0 right-0 w-[62%] bg-cover bg-bottom max-[992px]:w-full max-[992px]:opacity-25"
            style={{ backgroundImage: `url(${coursesHero})` }}
          />
          <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-[#0b2a55] via-[#0b2a55]/40 to-transparent max-[992px]:hidden" />

          <div className="relative mx-auto w-full max-w-[1170px] px-5">
            <div className="max-w-[560px] py-14">
              <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#cdd8ea]">
                German Language Course
              </span>
              <h1 className="mb-4 mt-4 font-['Poppins',sans-serif] text-[52px] font-bold leading-[1.1] text-white max-[640px]:text-[36px]">
                {name} <span className="text-[#f5b400]">{level}</span>
              </h1>
              <p className="mb-7 max-w-[500px] font-['Poppins',sans-serif] text-[13.5px] font-normal leading-[1.7] text-[#dbe4f2]">
                {course.heroText}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 rounded-md bg-[#f5b400] px-6 py-3.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-[#0b2a55]"
                >
                  Enquire Now <ArrowRight size={14} weight="bold" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-white"
                >
                  <DownloadSimple size={14} weight="bold" /> Download Brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto w-full max-w-[1170px] px-5">
            <div className="rounded-[6px] border border-[#e6ebf3] bg-white p-[34px] shadow-[0_10px_40px_rgba(20,40,80,0.10)] max-[640px]:p-[22px]">
              <div className="grid grid-cols-2 items-center gap-10 max-[992px]:grid-cols-1">
                <div>
                  <Eyebrow label="ABOUT THE COURSE" />
                  <h2 className="mb-5 mt-5 font-['Poppins',sans-serif] text-[34px] font-bold leading-[1.15] text-[#0b2a55]">
                    Start Your German Journey with <span className="text-[#f5b400]">{course.fullName}</span>
                  </h2>
                  <p className="max-w-[460px] font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.85] text-[#5f6b7d]">
                    {course.aboutText}
                  </p>
                </div>
<div className="relative min-h-[280px]">
  <span className="absolute left-[2%] top-0 z-[2] font-['Poppins',sans-serif] text-[56px] font-bold leading-none text-[#f7d77a]">
    “
  </span>

  <div className="relative z-[2] pl-[2%] pt-10">
    <p className="max-w-[260px] font-['Caveat_Variable',cursive] text-[38px] font-semibold leading-[1.05] text-[#0f3a72]">
      A new language opens new doors.
    </p>
    <i className="mb-3 mt-3 block h-[3px] w-[54px] rounded-sm bg-[#f5b400]" />
    <p className="font-['Poppins',sans-serif] text-[13px] leading-[1.6] text-[#5f6b7d]">
      Same Language.
      <br />A Brighter You.
    </p>
  </div>

  <img
    className="pointer-events-none absolute bottom-0 right-0 h-auto w-[92%] opacity-90"
    src={cologneSketch}
    alt="Cologne skyline illustration"
  />
</div>
              </div>

              {/* info tiles */}
              <div className="mt-8 grid grid-cols-4 gap-5 max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
                {infoTiles.map((tile, index) => (
                  <div
                    key={tile.id}
                    className="flex items-center gap-3.5 rounded-xl border border-[#e6ebf3] bg-white px-4 py-4"
                  >
                    <span
                      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl text-[#0b2a55] ${iconBg(index)}`}
                    >
                      {tile.icon}
                    </span>
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[11px] font-normal leading-none text-[#7a8496]">
                        {tile.label}
                      </p>
                      <p className="mt-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-[1.3] text-[#0b2a55]">
                        {tile.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* what you'll learn */}
              <div className="mt-14 text-center">
                <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#0b2a55]">
                  What You'll Learn
                </span>
                <span className="mx-auto mt-2.5 block h-[3px] w-[26px] rounded-sm bg-[#f5b400]" />
                <h2 className="mt-5 font-['Poppins',sans-serif] text-[30px] font-bold leading-[1.2] text-[#0b2a55]">
                  Build Real Language Skills
                </h2>
                <p className="mx-auto mt-3 max-w-[620px] font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.6] text-[#5f6b7d]">
                  Gain practical skills to communicate confidently in everyday situations and prepare for your future.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
                {skills(course.examName).map((skill, index) => (
                  <div
                    key={skill.id}
                    className="flex items-start gap-4 rounded-xl border border-[#e6ebf3] bg-white px-5 py-5"
                  >
                    <span
                      className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl text-[#0b2a55] ${iconBg(index)}`}
                    >
                      {skill.icon}
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-['Poppins',sans-serif] text-[14px] font-semibold leading-[1.3] text-[#0b2a55]">
                        {skill.title}
                      </h3>
                      <p className="max-w-[200px] font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.55] text-[#7a8496]">
                        {skill.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-14">
          <div className="mx-auto w-full max-w-[1170px] px-5">
            <div className="mb-10 text-center">
              <span className="mx-auto mb-2.5 block h-[3px] w-[26px] rounded-sm bg-[#f5b400]" />
              <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#0b2a55]">
                Explore More
              </span>
              <h2 className="mt-2 font-['Poppins',sans-serif] text-[34px] font-bold leading-[1.2] text-[#0b2a55]">
                Related Courses
              </h2>
              <p className="mx-auto mt-2.5 max-w-[600px] font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.6] text-[#5f6b7d]">
                Take the next step in your German language journey with our advanced courses.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-[22px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
              {relatedCourses.slice(0, 4).map((item) => (
                <CourseCard
                  key={item.id}
                  courseId={item.id}
                  track={item.track}
                  level={item.level}
                  title={item.title}
                  description={item.description}
                  image={courseStudent}
                  variant="related"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <RegisterForm />
      <Contact />
      <Footer />
    </>
  );
};

export const Route = createFileRoute("/course_/$courseId")({
  component: CourseDetail,
});