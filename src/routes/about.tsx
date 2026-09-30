import type { FC, ReactNode } from 'react';
import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../components/RegisterForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "@fontsource-variable/caveat";

import {
  Medal,
  ChartBar,
  BookOpen,
  ChatCircleText,
  UsersThree,
  Star,
  Heart,
  TrendUp,
  User,
  Gear,
  ShieldCheck,
  Monitor,
  GraduationCap,
  Globe,
  ArrowRight,
} from '@phosphor-icons/react';

import aboutHero from '../assets/aboutbg.png';
import cologneSketch from '../assets/bridge.png';

interface IconItem {
  id: string;
  icon: ReactNode;
  title: string;
  text: string;
}


const whoWeAreFeatures: IconItem[] = [
  {
    id: 'goethe',
    icon: <Medal size={20} weight="duotone" />,
    title: 'Goethe-Certified Training',
    text: 'Recognized and trusted German language training.',
  },
  {
    id: 'structured',
    icon: <BookOpen size={20} weight="duotone" />,
    title: 'Structured Learning',
    text: 'Well-planned curriculum with step-by-step guidance.',
  },
  {
    id: 'a1a2',
    icon: <ChartBar size={20} weight="duotone" />,
    title: 'A1 to A2 Programs',
    text: 'Build a strong foundation in German, step by step.',
  },
  {
    id: 'practical-comm',
    icon: <ChatCircleText size={20} weight="duotone" />,
    title: 'Practical Communication',
    text: 'Real-life conversations for real-world confidence.',
  },
];

const coreValues: IconItem[] = [
  {
    id: 'student-first',
    icon: <UsersThree size={26} weight="duotone" />,
    title: 'Student First',
    text: 'Your goals, our priority.',
  },
  {
    id: 'quality-education',
    icon: <Star size={26} weight="duotone" />,
    title: 'Quality Education',
    text: 'Structured, practical and result-oriented.',
  },
  {
    id: 'integrity',
    icon: <Heart size={26} weight="duotone" />,
    title: 'Integrity',
    text: 'We believe in honest guidance and transparent processes.',
  },
  {
    id: 'brighter-future',
    icon: <TrendUp size={26} weight="duotone" />,
    title: 'A Brighter Future',
    text: 'Empowering you for new opportunities in Germany and beyond.',
  },
];

const approachItems: IconItem[] = [
  {
    id: 'structured-learning',
    icon: <BookOpen size={22} weight="duotone" />,
    title: 'Structured Learning',
    text: 'Step-by-step progress from A1 to B2.',
  },
  {
    id: 'practical-communication',
    icon: <ChatCircleText size={22} weight="duotone" />,
    title: 'Practical Communication',
    text: 'Learn German for real-life situations.',
  },
  {
    id: 'personalized-support',
    icon: <User size={22} weight="duotone" />,
    title: 'Personalized Support',
    text: 'Guidance at every step of your journey.',
  },
  {
    id: 'exam-oriented',
    icon: <Gear size={22} weight="duotone" />,
    title: 'Exam-Oriented Training',
    text: 'Best preparation for TELC and other exams.',
  },
];

const commitmentItems: IconItem[] = [
  {
    id: 'experienced-team',
    icon: <UsersThree size={22} weight="duotone" />,
    title: 'Experienced & Supportive Team',
    text: 'Learn from experts who care about your success.',
  },
  {
    id: 'trusted',
    icon: <ShieldCheck size={22} weight="duotone" />,
    title: 'Trusted by Learners',
    text: 'A growing community of successful students.',
  },
  {
    id: 'real-life-skills',
    icon: <ChartBar size={22} weight="duotone" />,
    title: 'Focus on Real-Life Skills',
    text: 'Gain confidence in everyday situations.',
  },
  {
    id: 'flexible-options',
    icon: <Monitor size={22} weight="duotone" />,
    title: 'Flexible Learning Options',
    text: 'Online and offline batches to suit your needs.',
  },
  {
    id: 'dedicated-support',
    icon: <GraduationCap size={22} weight="duotone" />,
    title: 'Dedicated Student Support',
    text: 'We are with you, always.',
  },
  {
    id: 'global-opportunities',
    icon: <Globe size={22} weight="duotone" />,
    title: 'Pathway to Global Opportunities',
    text: 'Open doors to study, work or live in Germany.',
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


const About: FC = () => {
  return (
    <>
    <div className="bg-white font-['Inter',sans-serif] text-[#5f6b7d]">
      <section
        className="flex min-h-[400px] items-center bg-[#0b2a55] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="mx-auto w-full max-w-[1170px] px-1">
          <div className="max-w-[640px] pr-6">
            <Eyebrow label="ABOUT ASPIRE" light />
            <h1 className="mb-5 mt-[18px] font-['Poppins',sans-serif] text-[46px] font-extrabold leading-[1.4] text-white max-[640px]:text-[30px]">
              More Than
              <br/>
              <span className="text-[#f5b400]"> a Language Institute</span>
            </h1>
            <p className="mb-[26px] max-w-[480px] font-['Poppins',sans-serif] text-[14.5px] font-normal leading-[1.65] text-[#dbe4f2]">
              At Aspire, we believe language learning opens doors — to new cultures, meaningful connections and a
              brighter future. We are committed to helping you learn German with confidence through high-quality
              teaching, practical learning and continuous support.
            </p>
            <nav className="flex flex-wrap items-center gap-3.5">
              <a
                href="#our-story"
                className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-white"
              >
                Our Story <ArrowRight size={14} weight="bold" />
              </a>
              <i className="h-3.5 w-px bg-white/35" />
              <a
                href="#our-values"
                className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-white"
              >
                Our Values <ArrowRight size={14} weight="bold" />
              </a>
              <i className="h-3.5 w-px bg-white/35" />
              <a
                href="#our-approach"
                className="inline-flex items-center gap-1.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-none text-white"
              >
                Our Approach <ArrowRight size={14} weight="bold" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* ---------------- Who We Are + Core Values ---------------- */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1170px] px-5">
          <div className="grid grid-cols-[1.05fr_1fr] items-center gap-[50px] rounded-[22px] border border-[#e6ebf3] p-[46px] shadow-[0_20px_50px_rgba(20,40,80,0.08)] max-[992px]:grid-cols-1 max-[640px]:p-[26px]">
            <div>
              <Eyebrow label="ABOUT US" />
              <h2 className="mb-[18px] mt-4 font-['Poppins',sans-serif] text-[40px] font-bold leading-[1.15] text-[#0b2a55]">
                Who We <span className="text-[#f5b400]">Are</span>
              </h2>
              <p className="mb-[30px] font-['Poppins',sans-serif] text-sm font-normal leading-[1.7] text-[#5f6b7d]">
                Aspire is a dedicated German language institute committed to helping learners achieve their
                personal, academic and professional goals. We provide high-quality, structured and practical German
                language training for students, professionals and anyone who dreams of a better future in Germany.
              </p>

              <div className="grid grid-cols-2 gap-x-[30px] gap-y-[26px] max-[640px]:grid-cols-1">
                {whoWeAreFeatures.map((item) => (
                  <div className="flex items-start gap-3.5" key={item.id}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3fb] text-[#0f3a72]">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="mb-1 font-['Poppins',sans-serif] text-sm font-semibold leading-[1.3] text-[#0b2a55]">
                        {item.title}
                      </h3>
                      <p className="font-['Poppins',sans-serif] text-[12.5px] font-normal leading-normal text-[#7a8496]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

<div className="relative [container-type:inline-size]">
  {/* soft warm glow */}
  <div className="pointer-events-none absolute left-[26%] top-[2%] z-[1] aspect-square w-[26%] rounded-full bg-[radial-gradient(circle,rgba(255,205,120,0.55)_0%,rgba(255,225,170,0.3)_45%,transparent_70%)] blur-xl" />

  <img
    className="block h-auto w-full"
    src={cologneSketch}
    alt="Cologne skyline illustration — Same language, a brighter you"
  />

  {/* text overlay, top-left corner of the image */}
  <div className="absolute left-[2%] top-[14%] z-[2] flex flex-col font-['Caveat_Variable',cursive] font-semibold text-[#0f3a72] text-[5.6cqw] leading-[1.05] tracking-[0.3px]">
    <span>Same</span>
    <span>Language.</span>

    <span className="relative inline-block">
      A Brighter You.
      <svg
        className="absolute left-[4%] -bottom-[0.25em] h-[0.3em] w-[60%]"
        viewBox="0 0 170 12"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M3 9 C 40 5, 100 3, 167 3"
          stroke="#f5b400"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  </div>
</div>
          </div>

          <div className="mt-[70px] text-center">
            <div className="mb-10 text-center">
              <span className="mx-auto mb-2.5 block h-[3px] w-[26px] rounded-sm bg-[#f5b400]" />
              <span className="font-['Poppins',sans-serif] text-[10.5px] font-semibold uppercase leading-none tracking-[2px] text-[#0b2a55]">
                Our Core Values
              </span>
              <h2 className="mt-2.5 font-['Poppins',sans-serif] text-[32px] font-bold leading-[1.2] text-[#0b2a55]">
                What Drives Us
              </h2>
              <p className="mx-auto mt-3.5 max-w-[560px] font-['Poppins',sans-serif] text-sm font-normal leading-[1.6] text-[#5f6b7d]">
                Our values shape everything we do, from how we teach to how we support our students.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-[22px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
              {coreValues.map((item) => (
                <div className="rounded-[14px] border border-[#e6ebf3] px-5 py-[30px] text-center" key={item.id}>
                  <span className="mb-[18px] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#eef3fb] text-[#0f3a72]">
                    {item.icon}
                  </span>
                  <h3 className="mb-2 font-['Poppins',sans-serif] text-[15px] font-semibold leading-[1.3] text-[#0b2a55]">
                    {item.title}
                  </h3>
                  <p className="font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.6] text-[#7a8496]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-[1170px] grid-cols-[300px_1fr] items-center gap-10 px-5 max-[992px]:grid-cols-1">
          <div>
            <Eyebrow label="OUR APPROACH" />
            <h2 className="mb-4 mt-3.5 font-['Poppins',sans-serif] text-[30px] font-bold leading-[1.15] text-[#0b2a55]">
              A Practical Way to Learn
            </h2>
            <p className="mt-3.5 font-['Poppins',sans-serif] text-sm font-normal leading-[1.65] text-[#5f6b7d]">
              We follow a learner-focused approach that combines structure, real-life communication and continuous
              support.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[26px] max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
            {approachItems.map((item) => (
              <div className="text-center" key={item.id}>
                <span className="mb-3.5 inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#eef3fb] text-[#0f3a72]">
                  {item.icon}
                </span>
                <h3 className="mb-1.5 font-['Poppins',sans-serif] text-sm font-semibold leading-[1.3] text-[#0b2a55]">
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

      <section className="py-16">
        <div className="mx-auto w-full max-w-[1170px] px-5">
          <div className="grid grid-cols-[340px_1fr] gap-[50px] rounded-[22px] border border-[#e6ebf3] p-[46px] shadow-[0_20px_50px_rgba(20,40,80,0.08)] max-[992px]:grid-cols-1 max-[640px]:p-[26px]">
            <div>
              <Eyebrow label="WHY CHOOSE ASPIRE" />
              <h2 className="mb-4 mt-3.5 font-['Poppins',sans-serif] text-[30px] font-bold leading-[1.15] text-[#0b2a55]">
                Your Goals, <span className="text-[#f5b400]">Our Commitment</span>
              </h2>
              <p className="mt-3.5 font-['Poppins',sans-serif] text-sm font-normal leading-[1.65] text-[#5f6b7d]">
                We are more than a language institute — we are your partner in building a brighter future. At
                Aspire, we are committed to providing the guidance, resources and support you need to achieve your
                German language goals.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-[30px] gap-y-7 max-[992px]:grid-cols-2 max-[640px]:grid-cols-1">
              {commitmentItems.map((item) => (
                <div className="flex items-start gap-3.5" key={item.id}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3fb] text-[#0f3a72]">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 font-['Poppins',sans-serif] text-[13.5px] font-semibold leading-[1.35] text-[#0b2a55]">
                      {item.title}
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.55] text-[#7a8496]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

export const Route = createFileRoute("/about")({
  component: About,
});