import type { FC, ReactNode } from 'react';
import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../components/RegisterForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  XLogo,
  ArrowRight,
} from '@phosphor-icons/react';

interface InfoItem {
  id: string;
  icon: ReactNode;
  title: string;
  body: ReactNode;
}

interface SocialItem {
  id: string;
  icon: ReactNode;
  ring: string;
  circle: string;
  title: string;
  text: string;
  label: string;
  button: string;
  href: string;
}

const EMAIL = 'hello@aspireacademy.com';
const PHONE = '+91 98765 43210';

const linkClass = "font-['Poppins',sans-serif] text-[13px] font-normal text-[#1d4ed8] underline";
const mutedClass = "font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.6] text-[#5f6b7d]";

const contactCards: InfoItem[] = [
  {
    id: 'email',
    icon: <EnvelopeSimple size={22} weight="regular" />,
    title: 'Email Us',
    body: (
      <>
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          {EMAIL}
        </a>
        <p className={`${mutedClass} mt-6 max-w-[200px]`}>We'll get back to you as soon as possible.</p>
      </>
    ),
  },
  {
    id: 'call',
    icon: <Phone size={22} weight="regular" />,
    title: 'Call Us',
    body: (
      <>
        <a href={`tel:${PHONE.replace(/\s/g, '')}`} className={linkClass}>
          {PHONE}
        </a>
        <p className={`${mutedClass} mt-6 max-w-[220px]`}>Mon – Sat, 9:00 AM – 6:00 PM (IST)</p>
      </>
    ),
  },
  {
    id: 'visit',
    icon: <MapPin size={22} weight="regular" />,
    title: 'Visit Us',
    body: (
      <>
        <p className={`${mutedClass} max-w-[220px]`}>123, Learning Lane, Near City Center</p>
        <p className="mt-2 font-['Poppins',sans-serif] text-[13px] font-semibold leading-[1.6] text-[#0b2a55]">
          Kozhikode, Kerala 673001
          <br />
          India
        </p>
      </>
    ),
  },
];

const locationItems: InfoItem[] = [
  {
    id: 'address',
    icon: <MapPin size={18} weight="regular" />,
    title: 'Aspire Academy',
    body: (
      <p className="font-['Poppins',sans-serif] text-[12px] font-normal leading-[1.6] text-[#7a8496]">
        123, Learning Lane, Near City Center
        <br />
        Kozhikode, Kerala 673001
        <br />
        India
      </p>
    ),
  },
  {
    id: 'email',
    icon: <EnvelopeSimple size={18} weight="regular" />,
    title: 'Email Us',
    body: (
      <a href={`mailto:${EMAIL}`} className="font-['Poppins',sans-serif] text-[12px] text-[#1d4ed8]">
        {EMAIL}
      </a>
    ),
  },
  {
    id: 'call',
    icon: <Phone size={18} weight="regular" />,
    title: 'Call Us',
    body: (
      <>
        <a
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="block font-['Poppins',sans-serif] text-[12px] text-[#1d4ed8]"
        >
          {PHONE}
        </a>
        <p className="font-['Poppins',sans-serif] text-[12px] font-normal leading-[1.6] text-[#7a8496]">
          Mon – Sat, 9:00 AM – 6:00 PM (IST)
        </p>
      </>
    ),
  },
];

const socials: SocialItem[] = [
  {
    id: 'facebook',
    icon: <FacebookLogo size={30} weight="fill" />,
    ring: 'bg-[#dbe7fb]',
    circle: 'bg-[#1877f2]',
    title: 'Follow Us on Facebook',
    text: 'Stay updated with our latest news, events and success stories.',
    label: 'Follow on Facebook',
    button: 'bg-[#2563eb]',
    href: '#',
  },
  {
    id: 'instagram',
    icon: <InstagramLogo size={30} weight="regular" />,
    ring: 'bg-gradient-to-br from-[#f9d5e8] to-[#fde3cf]',
    circle: 'bg-gradient-to-br from-[#a12fc4] via-[#e1306c] to-[#f7a441]',
    title: 'Follow Us on Instagram',
    text: 'Get a glimpse of our classes, student life and more.',
    label: 'Follow on Instagram',
    button: 'bg-gradient-to-r from-[#c2278d] to-[#ff7a3d]',
    href: '#',
  },
  {
    id: 'twitter',
    icon: <XLogo size={28} weight="fill" />,
    ring: 'bg-[#e5e7eb]',
    circle: 'bg-black',
    title: 'Follow Us on Twitter',
    text: 'Join the conversation and stay informed with our updates.',
    label: 'Follow on Twitter',
    button: 'bg-[#0f172a]',
    href: '#',
  },
];

const IconCircle: FC<{ size: string; children: ReactNode }> = ({ size, children }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#eef3fb] text-[#0f3a72] ${size}`}
  >
    {children}
  </span>
);

const ContactPage: FC = () => {
  return (
    <>
      <div className="bg-white font-['Inter',sans-serif] text-[#5f6b7d]">
        {/* ---------------- Contact channels ---------------- */}
        <section className="px-5 py-8">
          <div className="mx-auto w-full max-w-[1380px] rounded-[40px] border border-[#e6ebf3] bg-white px-[64px] pb-[60px] pt-6 shadow-[0_10px_40px_rgba(20,40,80,0.06)] max-[992px]:px-6 max-[640px]:rounded-[24px]">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#fdefb2] px-4 py-2 font-['Poppins',sans-serif] text-[12.5px] font-medium leading-none text-[#0b2a55]">
                Getting in Touch.
              </span>
              <h1 className="mt-3 font-['Poppins',sans-serif] text-[38px] font-bold leading-[1.2] text-[#0b2a55] max-[640px]:text-[28px]">
                Contact Aspire Academy
              </h1>
              <p className="mx-auto mt-3 max-w-[460px] font-['Poppins',sans-serif] text-[13.5px] font-normal leading-[1.6] text-[#5f6b7d]">
                Ready to take the next step towards your German language goals? We're here to help. Reach out to us
                through any of the following channels.
              </p>
            </div>

            <div className="mt-11 grid grid-cols-3 items-stretch gap-6 max-[992px]:grid-cols-1">
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col items-center rounded-2xl border border-[#e6ebf3] bg-white px-6 py-6 text-center shadow-[0_6px_20px_rgba(20,40,80,0.05)]"
                >
                  <IconCircle size="h-12 w-12">{card.icon}</IconCircle>
                  <h3 className="mb-3 mt-4 font-['Poppins',sans-serif] text-[15px] font-semibold leading-[1.3] text-[#0b2a55]">
                    {card.title}
                  </h3>
                  {card.body}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <RegisterForm />

      <div className="bg-white font-['Inter',sans-serif] text-[#5f6b7d]">
        <section className="py-20">
          <div className="mx-auto grid w-full max-w-[1170px] grid-cols-[1fr_1.35fr] items-center gap-[60px] px-5 max-[992px]:grid-cols-1">
            <div>
              <span className="inline-flex items-center gap-2.5 font-['Poppins',sans-serif] text-[9.5px] font-semibold uppercase leading-none tracking-[1.5px] text-[#0b2a55]">
                <i className="inline-block h-[3px] w-[18px] bg-[#f5b400]" />
                Our Location
              </span>
              <h2 className="mb-3 mt-3 font-['Poppins',sans-serif] text-[30px] font-bold leading-[1.15] text-[#0b2a55]">
                Find Us Here
              </h2>
              <p className="mb-7 max-w-[340px] font-['Poppins',sans-serif] text-[13px] font-normal leading-[1.65] text-[#5f6b7d]">
                Visit our institute or get in touch. We're always happy to assist you on your German language
                journey.
              </p>

              <div className="flex flex-col gap-5">
                {locationItems.map((item) => (
                  <div className="flex items-start gap-3.5" key={item.id}>
                    <IconCircle size="h-10 w-10">{item.icon}</IconCircle>
                    <div>
                      <h3 className="mb-0.5 font-['Poppins',sans-serif] text-[13px] font-semibold leading-[1.3] text-[#0b2a55]">
                        {item.title}
                      </h3>
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[365px] overflow-hidden rounded-xl border border-[#e6ebf3] shadow-[0_10px_30px_rgba(20,40,80,0.08)] max-[640px]:h-[300px]">
              <iframe
                title="Aspire Academy location"
                src="https://www.google.com/maps?q=Kozhikode,Kerala,India&z=14&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafd] px-5 py-10">
          <div className="mx-auto grid w-full max-w-[900px] grid-cols-3 gap-6 max-[992px]:grid-cols-1">
            {socials.map((social) => (
              <div
                key={social.id}
                className="flex flex-col items-center rounded-2xl bg-white px-6 pb-7 pt-7 text-center shadow-[0_8px_30px_rgba(20,40,80,0.08)]"
              >
                <span
                  className={`inline-flex h-[72px] w-[72px] items-center justify-center rounded-full ${social.ring}`}
                >
                  <span
                    className={`inline-flex h-[56px] w-[56px] items-center justify-center rounded-full text-white ${social.circle}`}
                  >
                    {social.icon}
                  </span>
                </span>
                <h3 className="mb-2 mt-4 font-['Poppins',sans-serif] text-[16px] font-semibold leading-[1.3] text-[#0b2a55]">
                  {social.title}
                </h3>
                <p className="mb-6 max-w-[220px] font-['Poppins',sans-serif] text-[12.5px] font-normal leading-[1.55] text-[#7a8496]">
                  {social.text}
                </p>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto flex h-10 w-full items-center justify-center gap-1.5 rounded-md font-['Poppins',sans-serif] text-xs font-medium leading-none text-white ${social.button}`}
                >
                  {social.label} <ArrowRight size={12} weight="bold" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});