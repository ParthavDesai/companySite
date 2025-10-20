"use client";
import { useState,ReactNode } from "react";
import { Mail, Phone, MapPin, Clock, Send, Copy, Check, Linkedin, Github, Instagram } from "lucide-react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  agree?: string;
};
export interface InfoRowProps {      // export if used elsewhere
  icon: ReactNode;
  children: ReactNode;
}

export default function ContactPage() {

  const [errors, setErrors] = useState<Errors>({});
  const [copyOk, setCopyOk] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "General", message: "", company: "", agree: false });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const email = "pdtechconsultancysolutions@gmail.com"; // <-- change me
  const phone = "+1 (647)-924-5182"; // <-- change me
  const address = "123 King St W, Toronto, ON"; // <-- change me

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
    if (!form.agree) e.agree = "Please accept the privacy notice";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
  
    setLoading(true);
    setStatus(null);
  
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setStatus("Thanks! Your message has been sent ✅");
        alert("Thanks! Your message has been sent ✅");
        setForm({ name: "", email: "", topic: "General", message: "", company: "", agree: false });
      } else {
        console.error(data);
        setStatus("Something went wrong ❌ Please try again later.");
        alert("Something went wrong ❌ Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌ Please try again later.");
      alert("Something went wrong ❌ Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyOk(true);
      setTimeout(() => setCopyOk(false), 1600);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* background flair */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-white/10 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-400/10 blur-2xl" />
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
            We’d love to hear from you. Tell us a bit about your project, and we’ll reach out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <h2 className="mb-6 text-xl font-medium">Send a message</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none ring-0 transition focus:border-white/30"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-white/30"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="company">Company (optional)</label>
                  <input
                    id="company"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-white/30"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/80" htmlFor="topic">Topic</label>
                  <select
                    id="topic"
                    className="w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-white/30"
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  >
                    <option>General</option>
                    <option>Project Inquiry</option>
                    <option>Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/80" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 outline-none focus:border-white/30"
                  placeholder="Tell us about your idea, timeline, and goals..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  className="mt-1 size-4 rounded border-white/20 bg-black/50 text-white focus:ring-0"
                />
                <label htmlFor="agree" className="text-sm text-white/70">
                  I agree to the <a href="#" className="underline decoration-dotted underline-offset-4 hover:text-white">privacy policy</a> and consent to be contacted.
                </label>
              </div>
              {errors.agree && <p className="-mt-2 text-xs text-red-400">{errors.agree}</p>}

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/90 px-5 py-3 font-medium text-black transition hover:bg-white"
                >
                  <Send className="size-4" /> Send message
                </button>
              </div>
            </form>
          </section>

          {/* Contact Details */}
          <aside className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <h2 className="text-xl font-medium">Get in touch</h2>

            <div className="space-y-4">
              <InfoRow icon={<Mail className="size-4" />}>
                <button
                  onClick={copyEmail}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-left text-white/90 transition hover:bg-black/70"
                >
                  <span>{email}</span>
                  {copyOk ? <Check className="size-4" /> : <Copy className="size-4 opacity-70 group-hover:opacity-100" />}
                </button>
              </InfoRow>

              <InfoRow icon={<Phone className="size-4" />}>{phone}</InfoRow>
              <InfoRow icon={<MapPin className="size-4" />}>{address}</InfoRow>
              <InfoRow icon={<Clock className="size-4" />}>Mon–Fri, 9:00–18:00 ET</InfoRow>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href="www.linkedin.com" aria-label="LinkedIn" className="inline-flex rounded-xl border border-white/10 bg-black/50 p-2 transition hover:bg-black/70">
                <Linkedin className="size-5" />
              </a>
              <a href="www.instagram.com" aria-label="GitHub" className="inline-flex rounded-xl border border-white/10 bg-black/50 p-2 transition hover:bg-black/70">
                <Github className="size-5" />
              </a>
              <a href="www.github.com" aria-label="Instagram" className="inline-flex rounded-xl border border-white/10 bg-black/50 p-2 transition hover:bg-black/70">
                <Instagram className="size-5" />
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <details className="group rounded-xl border border-white/10 bg-black/40 p-4">
                <summary className="cursor-pointer select-none list-none font-medium">How fast do you reply?</summary>
                <p className="mt-2 text-sm text-white/70">We typically respond within 1 business day. Urgent? Add &quot;[URGENT]&quot; to your subject.</p>
              </details>
              <details className="group rounded-xl border border-white/10 bg-black/40 p-4">
                <summary className="cursor-pointer select-none list-none font-medium">Do you offer free consultations?</summary>
                <p className="mt-2 text-sm text-white/70">Yes—15–30 minute discovery calls to explore fit and scope.</p>
              </details>
              <details className="group rounded-xl border border-white/10 bg-black/40 p-4">
                <summary className="cursor-pointer select-none list-none font-medium">What info helps most?</summary>
                <p className="mt-2 text-sm text-white/70">Timeline, budget range, core goals, and any links (docs, wireframes, repos) you can share.</p>
              </details>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:p-8">
          <p className="text-balance text-white/80">Prefer email? Reach us directly at</p>
          <button onClick={copyEmail} disabled={loading} className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/90 px-4 py-2 font-medium text-black transition hover:bg-white">
            {copyOk ? <Check className="size-4" /> : <Mail className="size-4" />} {email}
          </button>
        </div>
      </main>
    </div>
  );
}

export function InfoRow({ icon, children }:InfoRowProps) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <span className="inline-flex size-9 items-center justify-center rounded-xl border border-white/10 bg-black/50">
        {icon}
      </span>
      <span className="text-sm md:text-base">{children}</span>
    </div>
  );
}
