import { ArrowRight } from "@phosphor-icons/react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
    variant?: "Yellow" | "navy" | "outline-light" | "outline-navy";
    arrow?: boolean;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;

} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    variant = "Yellow",
    arrow = false,
    icon,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const variants = {
        Yellow: "bg-[#F5B400] text-[#0B294D]",
        navy:
      "bg-[#0F3A72] text-white shadow-[0_6px_14px_rgba(15,58,114,0.25)]",
    "outline-light":
      "bg-white/[0.04] text-white border-white/55",
    "outline-navy":
      "bg-white text-[#0F3A72] border-[#0F3A72] hover:bg-[#0F3A72] hover:text-white",

    };

    return (
        <button
        className={`"   inline-flex items-center justify-center gap-2
        rounded-[6px]
        border-[1.5px] border-transparent
        px-6 py-3.5
        text-[13px] font-semibold
        transition-all duration-150
        hover:-translate-y-px
        ${variants[variant]}
        ${className}
        `}
        {...props}
        >
            {icon}
            <span> {children} </span>
            {arrow && <ArrowRight size={16} weight="bold"/>}
        </button>
    );
    
}

