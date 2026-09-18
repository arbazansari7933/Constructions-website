import { useForm } from "react-hook-form";
import { buildTypes, projectStages, budgetRanges } from "../data/content";

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    const message = [
      "*New Construction Enquiry — Ejaz Constructions*",
      "",
      `*Name:* ${data.name || "Not provided"}`,
      `*Phone:* ${data.phone || "Not provided"}`,
      `*WhatsApp:* ${data.whatsapp || "Not provided"}`,
      `*Email:* ${data.email || "Not provided"}`,
      `*Project Location:* ${data.projectLocation || "Not provided"}`,
      `*What to Build:* ${data.buildType || "Not specified"}`,
      `*Project Stage:* ${data.projectStage || "Not specified"}`,
      `*Approx. Budget:* ${data.budget || "Not specified"}`,
      `*Plot Size:* ${data.plotSize || "Not specified"}`,
      `*Expected Start:* ${data.startDate || "Not specified"}`,
      "",
      `*Project Details:* ${data.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/916291362516?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="container-wide py-24 lg:py-32">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20">
        <div>
          <p className="text-clay font-medium text-sm tracking-wide mb-3">Get in Touch</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            Planning to build?
          </h2>
          <p className="mt-5 text-ink-soft/75 leading-relaxed max-w-sm">
            Tell us about your project and our team will get in touch. For a faster response, call or WhatsApp us directly.
          </p>

          <div className="mt-8 space-y-3 max-w-sm">
            <a
              href="tel:+916291362516"
              className="flex items-center justify-between border border-line bg-white/40 px-5 py-4 hover:border-clay transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-soft/60">Call</p>
                <p className="font-semibold text-ink mt-1">+91 6291 362 516</p>
              </div>
              <span className="text-clay text-sm font-semibold">Call now →</span>
            </a>
            <a
              href="https://wa.me/916291362516?text=Hello%20Ejaz%20Constructions%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border border-line bg-white/40 px-5 py-4 hover:border-clay transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-soft/60">WhatsApp</p>
                <p className="font-semibold text-ink mt-1">+91 6291 362 516</p>
              </div>
              <span className="text-clay text-sm font-semibold">Message →</span>
            </a>
          </div>
        </div>

        <div>
          {isSubmitSuccessful ? (
            <div className="bg-clay/10 border border-clay/30 p-8 chamfer">
              <p className="font-display font-semibold text-ink text-lg">Thank you.</p>
              <p className="text-ink-soft/75 text-sm mt-2">
                Your enquiry has been prepared in WhatsApp. Please tap Send to send it to the Ejaz Constructions team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name *">
                  <input {...register("name", { required: true })} type="text" className={inputClass} />
                </Field>
                <Field label="Phone Number *">
                  <input {...register("phone", { required: true })} type="tel" className={inputClass} />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="WhatsApp Number">
                  <input {...register("whatsapp")} type="tel" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input {...register("email")} type="email" className={inputClass} />
                </Field>
              </div>

              <Field label="Project Location *">
                <input {...register("projectLocation", { required: true })} type="text" className={inputClass} />
              </Field>

              <Field label="What do you want to build?">
                <select {...register("buildType")} className={inputClass}>
                  <option value="">Select an option</option>
                  {buildTypes.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Project Stage">
                  <select {...register("projectStage")} className={inputClass}>
                    <option value="">Select an option</option>
                    {projectStages.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Approximate Budget">
                  <select {...register("budget")} className={inputClass}>
                    <option value="">Select an option</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Property / Plot Size">
                  <input {...register("plotSize")} type="text" className={inputClass} />
                </Field>
                <Field label="Expected Start Date">
                  <input {...register("startDate")} type="text" className={inputClass} />
                </Field>
              </div>

              <Field label="Project Details / Message">
                <textarea {...register("message")} rows={4} className={inputClass} />
              </Field>

              <button
                type="submit"
                className="bg-clay text-paper font-semibold px-7 py-3.5 chamfer hover:bg-clay-dark transition-colors"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink placeholder:text-stone focus:border-clay outline-none transition-colors";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink-soft/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
