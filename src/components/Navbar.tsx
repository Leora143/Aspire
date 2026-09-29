import { ArrowRightIcon, CaretDownIcon } from "@phosphor-icons/react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 lg:px-4">
        {/* Logo */}
        <a href="/" className="flex items-start">
          <img src={logo} alt="Aspire" className="h-12 w-auto m-4" />
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex items-center gap-1 py-2
                         text-sm font-medium text-[#475569]
                         transition-colors
                         hover:text-[#0F3B6E]
                         focus:text-[#0F3B6E]
                         after:absolute after:bottom-0 after:left-0
                         after:h-0.5 after:w-0 after:bg-[#f5b400]
                         after:transition-all after:duration-300
                         hover:after:w-full focus:after:w-full"
            >
              {item.label}
              {item.hasDropdown && (
                <CaretDownIcon
                  size={15}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              )}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row h-10 w-auto gap-4 items-center mt-6 mr-11 mb-5">
          <a
            href="#register"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F3B6E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#123d69]"
          >
            Apply Now
            <ArrowRightIcon size={16} weight="bold" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center border border-gray-400 gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-black"
          >
            Brochure
            <CaretDownIcon size={16} weight="bold" className="text-[#64748B]" />
          </a>
        </div>
      </nav>
    </header>
  );
}