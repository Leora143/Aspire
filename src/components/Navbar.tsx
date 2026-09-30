import {
  ArrowRightIcon,
  CaretDownIcon,
  CaretRightIcon,
  UserIcon,
  SquaresFourIcon,
  GraduationCapIcon,
  MonitorIcon,
} from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.png";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "#contact" },
// ];

const courseItems = [
  {
    label: "All Courses",
    href: "#courses",
    icon: SquaresFourIcon,
  },
  {
    label: "Test (German)",
    href: "#test",
    icon: MonitorIcon,
  },
  {
    label: "Goethe-Institut",
    href: "#goethe",
    icon: UserIcon,
  },
  {
    label: "German for Work",
    href: "#work",
    icon: GraduationCapIcon,
  },
];

export function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex h-20 w-full items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Aspire Academy"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <Link
            to="/"
            className="
              relative
              py-2
              text-sm
              font-medium
              text-[#475569]
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-0
              after:bg-[#F5B400]
              after:transition-all
              after:duration-300
              hover:text-[#0F3B6E]
              hover:after:w-full
            "
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="group relative">
            <Link
            to="/course"
              className="
                relative
                flex
                items-center
                gap-1
                py-2
                text-sm
                font-medium
                text-[#475569]
                after:absolute
                after:bottom-0
                after:left-0
                after:h-0.5
                after:w-0
                after:bg-[#F5B400]
                after:transition-all
                after:duration-300
                hover:text-[#0F3B6E]
                hover:after:w-full
              "
            >
              Courses

              <CaretDownIcon
                size={15}
                weight="bold"
              />
            </Link>

            {/* Dropdown */}
            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-50
                w-[230px]
                -translate-x-1/2
                translate-y-2
                rounded-lg
                bg-white
                p-1.5
                opacity-0
                shadow-[0_10px_30px_rgba(15,58,114,0.15)]
                transition-all
                duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {courseItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    group/item
                    flex
                    items-center
                    justify-between
                    rounded-md
                    px-3
                    py-2.5
                    text-[12px]
                    font-medium
                    text-[#334155]
                    hover:bg-[#EEF4FB]
                    hover:font-bold
                  "
                >
                  <span className="flex items-center gap-2">

                    {/* Regular icon */}
                    <Icon
                      size={14}
                      weight="regular"
                      className="text-[#0F3B6E] group-hover/item:hidden"
                    />

                    {/* Bold icon on hover */}
                    <Icon
                      size={14}
                      weight="bold"
                      className="hidden text-[#0F3B6E] group-hover/item:block"
                    />

                    {label}
                  </span>

                  <CaretRightIcon
                    size={12}
                    weight="bold"
                    className="text-[#64748B]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <Link
            to="/about"
            className="
              relative
              py-2
              text-sm
              font-medium
              text-[#475569]
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-0
              after:bg-[#F5B400]
              after:transition-all
              after:duration-300
              hover:text-[#0F3B6E]
              hover:after:w-full
            "
          >
            About
          </Link>

          {/* Contact */}
          <Link
          to= "/contact"
            className="
              relative
              py-2
              text-sm
              font-medium
              text-[#475569]
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-0
              after:bg-[#F5B400]
              after:transition-all
              after:duration-300
              hover:text-[#0F3B6E]
              hover:after:w-full
            "
          >
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Apply Now */}
          <Link
            to="/register"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              bg-[#0F3B6E]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
            "
          >
            Apply Now
            <ArrowRightIcon
              size={16}
              weight="bold"
            />
          </Link>

          {/* Brochure
          <a
            href="#register"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-gray-400
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
            "
          >
            Brochure

            <CaretDownIcon
              size={16}
              weight="bold"
              className="text-[#64748B]"
            />
          </a> */}

        </div>
      </nav>
    </header>
  );
}