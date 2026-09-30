import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';
import courseBg from '../assets/coursecardbg.png';

export interface CourseCardProps {
  courseId: string;
  track: string;
  level: string;
  title: string;
  description: string;
  image: string;
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
    <article className="overflow-hidden rounded-2xl bg-white font-['Poppins',sans-serif] shadow-[0_8px_24px_rgba(20,50,100,0.08)]">
      <div
        className="relative h-[155px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${courseBg})` }}
      >
        <div className="absolute bottom-[26px] left-[22px] z-10 text-white">
          <span className="block text-[16px] font-semibold leading-none">{track}</span>
          <strong className="mt-0.5 block text-[38px] font-bold leading-[1.1]">{level}</strong>
          <i className="mt-2 block h-1 w-[38px] rounded-sm bg-[#F5B400]" />
        </div>

        <img
          src={image}
          alt="Student holding books"
          className="absolute bottom-0 right-0 h-full w-auto max-w-none"
        />
      </div>

      <div className="px-[18px] pb-[22px] pt-5">
        <h3 className="text-[16px] font-semibold leading-[1.3] text-[#0F3B6E]">{title}</h3>
        <p className="my-[10px] mb-5 text-[13px] font-normal leading-[1.55] text-[#7a8496]">{description}</p>

        {variant === 'list' ? (
          <>
            <Link
              to="/course/$courseId"
              params={{ courseId }}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#0F3B6E] px-3 py-[11px] text-[12px] font-semibold leading-none text-white"
            >
              Explore Course <ArrowRight size={13} weight="bold" />
            </Link>
            <a
              href={brochureHref}
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#0F3B6E] bg-white px-3 py-[11px] text-[12px] font-semibold leading-none text-[#0F3B6E]"
            >
              <DownloadSimple size={13} weight="bold" /> Download Brochure
            </a>
          </>
        ) : (
          <Link
            to="/course/$courseId"
            params={{ courseId }}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#0F3B6E] bg-white px-3 py-[11px] text-[12px] font-semibold leading-none text-[#0F3B6E]"
          >
            Learn More <ArrowRight size={13} weight="bold" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default CourseCard;