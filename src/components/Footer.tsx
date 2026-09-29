import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react";
import Button from "./Button";
import logo from "../assets/logo.png";

const quickLinks = [
  "Home",
  "About Us",
  "Courses",
  "Why Choose Us",
  "Student Experiences",
  "FAQ",
  "Contact Us",
];

const footerCourses = [
  "A1 – Beginner",
  "A2 – Elementary",
  "B1 – Intermediate",
  "B2 – Upper Intermediate",
  "Test Preparation",
  "Online Classes",
  "Corporate Training",
];

const contactInfo = [
  {
    icon: Phone,
    text: "+91 98765 43210",
  },
  {
    icon: EnvelopeSimple,
    text: "info@aspireacademy.in",
  },
  {
    icon: MapPin,
    text: "Calicut, Kerala, India",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7FAFE]">

      {/* Top */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1280px]
          grid-cols-[1.6fr_1fr_1fr_1.2fr]
          gap-[30px]
          px-5
          pb-10
          pt-16
          max-[992px]:grid-cols-2
          max-[560px]:grid-cols-1
        "
      >

        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="Aspire Academy"
            className="mb-4 h-[80px] w-auto pr-8"
          />

          <p className="mb-[18px] text-[13px] leading-[1.6] text-[#55617A] pl-5">
            Expert guidance. Practical learning.
            <br />
            A brighter tomorrow.
          </p>

          <div className="flex items-center gap-3 pl-5">
            <a href="#" aria-label="Instagram">
              <InstagramLogo
                size={20}
                weight="regular"
                className="text-[#0B294D]"
              />
            </a>

            <a href="#" aria-label="Facebook">
              <FacebookLogo
                size={20}
                weight="fill"
                className="text-[#0B294D]"
              />
            </a>

            <a href="#" aria-label="YouTube">
              <YoutubeLogo
                size={20}
                weight="fill"
                className="text-[#0B294D]"
              />
            </a>

            <a href="#" aria-label="LinkedIn">
              <LinkedinLogo
                size={20}
                weight="fill"
                className="text-[#0B294D]"
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-[18px] text-[15px] font-semibold leading-none text-[#0B294D]">
  Quick Links
  <span className="mt-2 block h-[3px] w-8 bg-[#F5B400]" />
</h4>

          <ul className="flex flex-col gap-[11px]">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[13px] leading-[1.4] text-[ #353941]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
                  <h4 className="mb-[18px] text-[15px] font-semibold leading-none text-[#0B294D]">
Our Courses  <span className="mt-2 block h-[3px] w-8 bg-[#F5B400]" />
</h4>

          <ul className="flex flex-col gap-[11px]">
            {footerCourses.map((course) => (
              <li key={course}>
                <a
                  href="#"
                  className="text-[13px] leading-[1.4] text-[ #2e3138]"
                >
                  {course}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
             <h4 className="mb-[18px] text-[15px] font-semibold leading-none text-[#0B294D]">
Get in Touch  
<span className="mt-2 block h-[3px] w-8 bg-[#F5B400]" />
</h4>

          <ul className="flex flex-col gap-[11px]">
            {contactInfo.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="
                  flex
                  items-center
                  gap-2
                  text-[13px]
                  leading-[1.4]
                  text-[ #31353c]
                "
              >
                <Icon
                  size={15}
                  className="shrink-0 text-[#0B294D]"
                />

                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="Yellow"
            arrow
            className="mt-4 px-5 py-3 text-[12px] w-50 !font-extrabold"
            icon={<Phone size={14} weight="fill"
            className="text-[#0B294D] text-normal "/>}
          >
            
            Talk to Us
          </Button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#E5EAF2]">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1280px]
            flex-wrap
            items-center
            justify-between
            gap-2.5
            px-5
            py-5
            max-[560px]:flex-col
            max-[560px]:text-center
          "
        >
          <span className="text-[12.5px] leading-none text-[ #454b54]">
            © 2024 Aspire Academy. All rights reserved.
          </span>

          <span className="text-[12.5px] leading-none text-[ #3d434b]">
            <a href="#">Privacy Policy</a>
            {" | "}
            <a href="#">Terms &amp; Conditions</a>
            {" | "}
            <a href="#">Sitemap</a>
          </span>

        <span className="text-[12px] font-semibold leading-none tracking-[1px] text-[#0B294D]">
  Learn{" "}
  <span className="text-[#F7A707]">•</span>{" "}
  Grow{" "}
  <span className="text-[#F7A707]">•</span>{" "}
  Belong
</span>
        </div>
      </div>

    </footer>
  );
}