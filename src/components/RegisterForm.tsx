import { useForm } from "@tanstack/react-form";
import {
  User,
  EnvelopeSimple,
  Phone,
  GraduationCap,
  Monitor,
  ChatText,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";
import Button from "./Button";

export default function RegisterForm() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      mode: "",
      message: "",
    },

onSubmit: async ({ value }) => {
  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    console.log(data.message);

    form.reset();
  } catch (error) {
    console.error("Registration failed:", error);
  }
},
  });

  return (
    <section className="bg-[#f7fafe] py-11">
      <div className="mx-auto w-full max-w-[920px] px-4">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.5px]
              text-[#0B294D]
            "
          >
            Register{" "}
            <span className="text-[#F5B400]">
              Now
            </span>
          </h2>

          <span className="mx-auto mt-2.5 block h-[3px] w-5 bg-[#F5B400]" />

          <p
            className="
              mt-[14px]
              text-[14px]
              font-normal
              leading-[1.6]
              text-[#55617A]
            "
          >
            Fill out the form below and we'll get in touch with you soon.
          </p>
        </div>

        {/* Form card */}
        <form
          className="
            mt-9
            rounded-2xl
            bg-white
            p-9
            shadow-[0_10px_30px_rgba(20,40,80,0.06)]
            max-[768px]:p-6
          "
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          {/* Row 1 */}
          <div
            className="
              mb-5 grid
              grid-cols-2
              gap-[22px]
              max-[768px]:grid-cols-1
            "
          >
            {/* Full Name */}
            <form.Field name="fullName">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Full Name *
                  </span>

                  <span
                    className="
                      relative flex
                      items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <User size={16} />

                    <input
                      type="text"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                      className="
                        flex-1
                        border-0
                        bg-transparent
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                        placeholder:text-[#9AA4B6]
                      "
                    />
                  </span>
                </label>
              )}
            </form.Field>

            {/* Email */}
            <form.Field name="email">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Email Address *
                  </span>

                  <span
                    className="
                      flex items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <EnvelopeSimple size={16} />

                    <input
                      type="email"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Enter your email address"
                      required
                      className="
                        flex-1
                        border-0
                        bg-transparent
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                        placeholder:text-[#9AA4B6]
                      "
                    />
                  </span>
                </label>
              )}
            </form.Field>
          </div>

          {/* Row 2 */}
          <div
            className="
              mb-5 grid
              grid-cols-2
              gap-[22px]
              max-[768px]:grid-cols-1
            "
          >
            {/* Phone */}
            <form.Field name="phone">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Phone Number *
                  </span>

                  <span
                    className="
                      flex items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <Phone size={16} />

                    <span
                      className="
                        border-r
                        border-[#E5EAF2]
                        pr-2.5
                        text-[13.5px]
                        leading-none
                        text-[#0B294D]
                      "
                    >
                      +91
                    </span>

                    <input
                      type="tel"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Enter your phone number"
                      required
                      className="
                        flex-1
                        border-0
                        bg-transparent
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                        placeholder:text-[#9AA4B6]
                      "
                    />
                  </span>
                </label>
              )}
            </form.Field>

            {/* Course */}
            <form.Field name="course">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Course / Level Interested In *
                  </span>

                  <span
                    className="
                      relative flex
                      items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <GraduationCap size={16} />

                    <select
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      required
                      className="
                        flex-1
                        appearance-none
                        border-0
                        bg-transparent
                        pr-5
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                      "
                    >
                      <option value="">
                        Select a course / level
                      </option>
                      <option>A1 – Beginner</option>
                      <option>A2 – Elementary</option>
                      <option>B1 – Intermediate</option>
                      <option>B2 – Upper Intermediate</option>
                    </select>

                    <CaretDown
                      size={14}
                      className="pointer-events-none absolute right-[14px] text-[#9AA4B6]"
                    />
                  </span>
                </label>
              )}
            </form.Field>
          </div>

          {/* Row 3 */}
          <div
            className="
              mb-5 grid
              grid-cols-2
              gap-[22px]
              max-[768px]:grid-cols-1
            "
          >
            {/* Learning mode */}
            <form.Field name="mode">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Preferred Learning Mode
                  </span>

                  <span
                    className="
                      relative flex
                      items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <Monitor size={16} />

                    <select
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      className="
                        flex-1
                        appearance-none
                        border-0
                        bg-transparent
                        pr-5
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                      "
                    >
                      <option value="">
                        Select an option
                      </option>
                      <option>Online</option>
                      <option>Offline</option>
                    </select>

                    <CaretDown
                      size={14}
                      className="pointer-events-none absolute right-[14px] text-[#9AA4B6]"
                    />
                  </span>
                </label>
              )}
            </form.Field>

            {/* Message */}
            <form.Field name="message">
              {(field) => (
                <label className="flex flex-col gap-2">
                  <span
                    className="
                      text-[12.5px]
                      font-semibold
                      leading-none
                      text-[#0B294D]
                    "
                  >
                    Message (Optional)
                  </span>

                  <span
                    className="
                      flex items-center
                      gap-2.5
                      rounded-lg
                      border
                      border-[#E5EAF2]
                      px-[14px]
                      py-3
                      text-[#9AA4B6]
                    "
                  >
                    <ChatText size={16} />

                    <input
                      type="text"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                      placeholder="Tell us about your goals or any specific requirements..."
                      className="
                        flex-1
                        border-0
                        bg-transparent
                        text-[13.5px]
                        leading-[1.3]
                        text-[#0B294D]
                        outline-none
                        placeholder:text-[#9AA4B6]
                      "
                    />
                  </span>
                </label>
              )}
            </form.Field>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="navy"
            arrow
            className="mt-1 w-full px-3 py-[15px]"
          >
            Submit Application
          </Button>
                   
          

          {/* Success message */}
          <form.Subscribe selector={(state) => state.isSubmitSuccessful}>
            {(isSubmitSuccessful) =>
              isSubmitSuccessful && (
                <div
                  role="status"
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#dcfce7]
                    px-4
                    py-3.5
                    text-[13px]
                    font-semibold
                    leading-none
                    text-[#16a34a]
                  "
                >
                  <CheckCircle size={14} weight="regular" />
                  Thank you! We will contact you soon.
                </div>
              )
            }
          </form.Subscribe>
        </form>
      </div>
    </section>
  );
}