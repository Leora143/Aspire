import type { FC, ReactNode } from 'react';
import { createFileRoute } from "@tanstack/react-router";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courseData";
import RegisterForm from "../components/RegisterForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  User,
  BookOpen,
  GraduationCap,
  ChatCircleText,
  Headset,
  ChartBar,
  ArrowRight,
} from '@phosphor-icons/react';

import coursesHero from '../assets/coursebg.png';
import courseStudent from '../assets/coursecardboy.png';

interface IconItem {
  id: string;
  icon: ReactNode;
  title: string;
  text: string;
}

const whyChooseItems: IconItem[] = [
  {
    id: 'experienced-instructors',
    icon: <User size={18} weight="regular" />,
    title: 'Experienced Instructors',
    text: 'Learn from qualified and dedicated trainers who make learning clear, practical and engaging.',
  },
  {
    id: 'structured-learning',
    icon: <BookOpen size={18} weight="regular" />,
    title: 'Structured Learning',
    text: 'A well-planned curriculum from A1 to C2 with a clear path, regular practice and continuous assessment.',
  },
  {
    id: 'exam-preparation',
    icon: <GraduationCap size={18} weight="regular" />,
    title: 'Exam Preparation',
    text: 'Focused training for Goethe, TELC and other internationally recognized German exams.',
  },
  {
    id: 'real-life-communication',
    icon: <ChatCircleText size={18} weight="regular" />,
    title: 'Real-Life Communication',
    text: 'Build confidence to use German in everyday situations, studies and professional life.',
  },
  {
    id: 'personal-support',
    icon: <Headset size={18} weight="regular" />,
    title: 'Personal Support',
    text: 'Get individual guidance, doubt clearance and motivation throughout your learning journey.',
  },
  {
    id: 'measurable-progress',
    icon: <ChartBar size={18} weight="regular" />,
    title: 'Measurable Progress',
    text: 'Track your improvement with regular feedback and achieve your next level with confidence.',
  },
];

const Eyebrow: FC<{ label: string; light?: boolean }> = ({ label, light = false }) => (
  <span
    className={`inline-flex items-center gap-2.5 font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] ${
      light ? 'text-[#cdd8ea]' : 'text-[#0b2a55]'
    }`}
  >
    <i className="inline-block h-[3px] w-[18px] bg-[#f5b400]" />
    {label}
  </span>
);

const Course: FC = () => {
  return (
    <>
      <div className="bg-white font-['Inter',sans-serif] text-[#5f6b7d]">
        <section className="relative flex min-h-[360px] items-center overflow-hidden bg-gradient-to-r from-[#0b2a55] to-[#0a3a80]">
          <div
            className="absolute inset-y-0 right-0 w-[62%] bg-cover bg-bottom max-[992px]:w-full max-[992px]:opacity-25"
            style={{ backgroundImage: `url(${coursesHero})` }}
          />
          <div className="absolute inset-y-0 right-0 w-[62%] bg-gradient-to-r from-[#0b2a55] via-[#0b2a55]/40 to-transparent max-[992px]:hidden" />

          <div className="relative mx-auto w-full max-w-[1170px] px-5">
            <div className="max-w-[640px] py-14">
              <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#cdd8ea]">
                German Language Programs
              </span>
              <h1 className="mb-7 mt-4 font-['Poppins',sans-serif] text-[48px] font-bold leading-[1.15] text-white max-[640px]:text-[32px]">
                Your German Journey
                <span className="block text-[#f5b400]">Starts Here.</span>
              </h1>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-md bg-[#f5b400] px-6 py-3.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-[#0b2a55]"
              >
                Explore Our Courses <ArrowRight size={14} weight="bold" />
              </a>
            </div>
          </div>
        </section>

        <section id="courses" className="py-16">
          <div className="mx-auto w-full max-w-[1170px] px-5">
            <div className="mb-10 text-center">
              <span className="mx-auto mb-2.5 block h-[3px] w-[26px] rounded-sm bg-[#f5b400]" />
              <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#0b2a55]">
                Our Programs
              </span>
              <h2 className="mt-2.5 font-['Poppins',sans-serif] text-[32px] font-bold leading-[1.2] text-[#0b2a55]">
                German Language Courses
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.6] text-[#5f6b7d]">
                Choose the right program and take the next step in your German language journey.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-[22px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  courseId={course.id}
                  track={course.track}
                  level={course.level}
                  title={course.title}
                  description={course.description}
                  image={courseStudent}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-6">
          <div className="mx-auto grid w-full max-w-[1170px] grid-cols-[360px_1fr] items-center gap-[50px] px-5 max-[992px]:grid-cols-1">
            <div>
              <Eyebrow label="WHY CHOOSE ASPIRE" />
              <h2 className="mb-4 mt-4 font-['Poppins',sans-serif] text-[34px] font-bold leading-[1.15] text-[#0b2a55]">
                Learn with purpose.
                <span className="block text-[#f5b400]">Grow with confidence.</span>
              </h2>
              <p className="mb-6 font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.7] text-[#5f6b7d]">
                At Aspire Academy, we go beyond language classes. We provide the right guidance, structure and
                support to help you build real skills and create better opportunities for your future in Germany.
              </p>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-md bg-[#0b2a55] px-4 py-3 font-['Poppins',sans-serif] text-xs font-semibold leading-none text-white"
              >
                Explore Our Courses <ArrowRight size={13} weight="bold" />
              </a>
              <div className="mt-10">
                <Eyebrow label="GERMAN FOR A BRIGHTER TOMORROW" />
              </div>
            </div>

            <div className="grid grid-cols-3 max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
              {whyChooseItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`border-[#e6ebf3] px-6 py-7 max-[640px]:border-l-0 ${
                    index % 3 !== 0 ? 'min-[993px]:border-l' : ''
                  } ${index < 3 ? 'min-[993px]:border-b' : ''}`}
                >
                  <div className="mb-3.5 flex items-center gap-2.5 text-[#0b2a55]">
                    <span className="font-['Poppins',sans-serif] text-[10px] font-semibold leading-none text-[#f5b400]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.icon}
                  </div>
                  <h3 className="mb-1.5 font-['Poppins',sans-serif] text-[13.5px] font-semibold leading-[1.35] text-[#0b2a55]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.55] text-[#7a8496]">
                    {item.text}
                  </p>
                </div>
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

export const Route = createFileRoute("/course")({
  component: Course,
});