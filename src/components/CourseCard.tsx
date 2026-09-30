import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';

export interface CourseCardProps {
  courseId: string;
  /** Small label above the level, e.g. "German", "Talc", "Goethe" */
  track: string;
  /** Big level text, e.g. "A1" */
  level: string;
  title: string;
  description: string;
  /** Header artwork (blue background, arc and student) — fills the header */
  image: string;
  /** "list" = Explore + Brochure buttons, "related" = single Learn More button */
  variant?: 'list' | 'related';
  brochureHref?: string;
}

const CourseCard: FC<CourseCardProps> = ({
  courseId,
  track,
  level,
  title,
  description,
  image,
  variant = 'list',
  brochureHref = '#',
}) => {
  return (
    <article className="overflow-hidden rounded-[16px] bg-white shadow-[0_10px_30px_rgba(20,40,80,0.10)]">
      {/* ---------------- Header ---------------- */}
      <div className="relative h-[168px] overflow-hidden bg-[#0b2a55]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right"
        />

        <div className="relative z-[2] flex flex-col px-6 pt-8">
          <span className="font-['Poppins',sans-serif] text-[17px] font-semibold leading-none text-white">
            {track}
          </span>
          <span className="mt-1 font-['Poppins',sans-serif] text-[42px] font-bold leading-[1.1] text-white">
            {level}
          </span>
          <i className="mt-2 block h-[3px] w-6 rounded-sm bg-[#f5b400]" />
        </div>
      </div>

      {/* ---------------- Body ---------------- */}
      <div className="px-5 pb-5 pt-[22px]">
        <h3 className="font-['Poppins',sans-serif] text-[15px] font-semibold leading-[1.3] text-[#0b2a55]">
          {title}
        </h3>
        <p className="mb-5 mt-2 font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.55] text-[#7a8496]">
          {description}
        </p>

        {variant === 'list' ? (
          <>
            <Link
              to="/course/$courseId"
              params={{ courseId }}
              className="flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[#0b2a55] font-['Poppins',sans-serif] text-xs font-semibold leading-none text-white"
            >
              Explore Course <ArrowRight size={13} weight="bold" />
            </Link>
            <a
              href={brochureHref}
              className="mt-2.5 flex h-9 w-full items-center justify-center gap-1.5 rounded-md border border-[#cfd8e6] bg-white font-['Poppins',sans-serif] text-xs font-semibold leading-none text-[#0b2a55]"
            >
              <DownloadSimple size={13} weight="bold" /> Download Brochure
            </a>
          </>
        ) : (
          <Link
            to="/course/$courseId"
            params={{ courseId }}
            className="flex h-9 w-full items-center justify-center gap-1.5 rounded-md border-2 border-[#0b2a55] bg-white font-['Poppins',sans-serif] text-[11px] font-semibold leading-none text-[#0b2a55]"
          >
            Learn More <ArrowRight size={12} weight="bold" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default CourseCard;