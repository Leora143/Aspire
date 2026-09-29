import { useForm } from "@tanstack/react-form";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What levels of German courses do you offer?",
    a: "We offer comprehensive German language courses from A1 to C2, designed for different learning goals such as study, work, or migration. Each level focuses on building strong language skills with practical training and personalized support.",
  },
  {
    q: "Are the classes online or offline?",
    a: "We offer both online and offline classes so you can learn in the format that suits you best.",
  },
  {
    q: "How long does it take to complete a level?",
    a: "Each level typically takes 6–8 weeks depending on the batch and your learning pace.",
  },
  {
    q: "Do you provide certification after course completion?",
    a: "Yes, you receive a certificate of completion for every level you finish with us.",
  },
  {
    q: "Can you help with exam preparation (Goethe, TELC, etc.)?",
    a: "Absolutely. We provide focused exam training, mock tests and one-to-one feedback.",
  },
  {
    q: "What makes Aspire Academy different from others?",
    a: "Experienced trainers, a structured curriculum and personal support at every step of your journey.",
  },
];

export default function FAQ() {
  const form = useForm({
    defaultValues: {
      openIndex: 0,
    },
  });

  return (
    <section className="bg-white py-11">
      <div className="mx-auto w-full max-w-[920px] px-4">

        {/* Heading */}
        <div className="text-center">
          <div className="mb-2 flex flex-col items-center gap-2">
            <span className="h-[3px] w-5 bg-[#F5B400]" />

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[1.5px]
                text-[#0B294D]
              "
            >
              FAQ
            </span>
          </div>

          <h2
            className="
              text-[30px] font-bold
              leading-[1.15]
              tracking-[-0.5px]
              text-[#0B294D]
            "
          >
            Frequently Asked{" "}
            <span className="text-[#F5B400]">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ */}
        <div className="mt-10 flex flex-col gap-3.5">
          {faqs.map((item, index) => (
            <form.Field
              key={item.q}
              name="openIndex"
            >
              {(field) => {
                const isOpen = field.state.value === index;

                return (
                  <div
                    className={`
                      overflow-hidden
                      rounded-[10px]
                      border
                      bg-white
                      ${
                        isOpen
                          ? "border-[#DDE4F0] shadow-[0_6px_18px_rgba(20,40,80,0.05)]"
                          : "border-[#E5EAF2]"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        field.handleChange(
                          isOpen ? -1 : index
                        )
                      }
                      className="
                        flex w-full
                        items-center justify-between
                        gap-4
                        bg-transparent
                        px-[22px] py-5
                        text-left
                        text-[14.5px]
                        font-semibold
                        leading-[1.4]
                        text-[#0B294D]
                      "
                    >
                      <span>{item.q}</span>

                      <span
                        className={`
                          flex h-[26px] w-[26px]
                          shrink-0
                          items-center justify-center
                          rounded-full
                          ${
                            isOpen
                              ? "bg-[#0F3B6E] text-white"
                              : "bg-[#EEF1F7] text-[#0F3B6E]"
                          }
                        `}
                      >
                        {isOpen ? (
                          <Minus size={14} weight="bold" />
                        ) : (
                          <Plus size={14} weight="bold" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <p
                        className="
                          px-[22px] pb-[22px]
                          text-[13.5px]
                          leading-[1.7]
                          text-[#55617A]
                        "
                      >
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>
          ))}
        </div>
      </div>
    </section>
  );
}